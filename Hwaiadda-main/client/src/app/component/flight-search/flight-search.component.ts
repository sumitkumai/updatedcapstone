import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { BookingFlowService } from '../../../services/booking-flow.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit, OnDestroy {

  searchForm!: FormGroup;
  filterForm!: FormGroup;
  flights: any[] = [];
  sourceList: string[] = [];
  destinationList: string[] = [];
  dropdownOpen = false;
  showError = false;
  errorMessage = '';

  private subs = new Subscription();

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private bookingFlow: BookingFlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      adult: [1],
      child: [0],
      infant: [0],
      travelClass: ['Economy']
    });
    this.filterForm = this.fb.group({
      minPrice: [''],
      maxPrice: [''],
      sortBy: ['price']
    });

    this.subs.add(this.httpService.suggestSource().subscribe({
      next: (data: any[]) => { this.sourceList = [...new Set(data.map(f => f.source))]; }
    }));
    this.subs.add(this.httpService.suggestDestination().subscribe({
      next: (data: any[]) => { this.destinationList = [...new Set(data.map(f => f.destination))]; }
    }));

    if (this.bookingFlow.searchParams) {
      this.searchForm.patchValue(this.bookingFlow.searchParams);
      this.search();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  updateTravelerCount(type: string, delta: number): void {
    const ctrl = this.searchForm.get(type);
    if (ctrl) {
      const newVal = (ctrl.value || 0) + delta;
      if (newVal >= 0) ctrl.setValue(newVal);
    }
  }

  get travelerSummary(): string {
    const a = this.searchForm.get('adult')?.value || 0;
    const c = this.searchForm.get('child')?.value || 0;
    const i = this.searchForm.get('infant')?.value || 0;
    const cls = this.searchForm.get('travelClass')?.value;
    return `${a} Adult${a !== 1 ? 's' : ''}${c ? ', ' + c + ' Child' : ''}${i ? ', ' + i + ' Infant' : ''} - ${cls}`;
  }

  search(): void {
    if (this.searchForm.invalid) return;
    const { source, destination, date } = this.searchForm.value;
    const f = this.filterForm.value;
    const filters: any = { sortBy: f.sortBy || 'price' };
    if (f.minPrice) filters.minPrice = Number(f.minPrice);
    if (f.maxPrice) filters.maxPrice = Number(f.maxPrice);

    this.subs.add(this.httpService.searchFlights(source, destination, date, filters).subscribe({
      next: (data) => {
        this.flights = data;
        this.showError = false;
      },
      error: () => {
        this.showError = true;
        this.errorMessage = 'Search failed.';
      }
    }));
  }

  selectFlight(flight: any): void {
    const adult = this.searchForm.get('adult')?.value || 1;
    const child = this.searchForm.get('child')?.value || 0;
    const infant = this.searchForm.get('infant')?.value || 0;
    const totalPrice = adult * flight.price + child * flight.price * 0.75 + infant * flight.price * 0.5;
    this.bookingFlow.setFlight(flight, totalPrice);
    this.bookingFlow.setSearchParams(this.searchForm.value);
    this.router.navigate(['/seat-selection', flight.id]);
  }
}
