import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';
import { BookingFlowService } from '../../../services/booking-flow.service';

@Component({
  selector: 'app-seat-selection-page',
  templateUrl: './seat-selection-page.component.html',
  styleUrls: ['./seat-selection-page.component.scss']
})
export class SeatSelectionPageComponent implements OnInit, OnDestroy {
  flightId = 0;
  seats: any[] = [];
  selectedSeat = '';
  showError = false;
  errorMessage = '';
  flight: any = null;
  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService,
    public bookingFlow: BookingFlowService
  ) {}

  ngOnInit(): void {
    this.flight = this.bookingFlow.selectedFlight;
    this.subs.add(
      this.route.paramMap.subscribe(params => {
        this.flightId = Number(params.get('id'));
        if (!this.flightId || !this.flight || Number(this.flight.id) !== this.flightId) {
          this.router.navigate(['/search_flight']);
          return;
        }
        this.loadSeats();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadSeats(): void {
    this.subs.add(
      this.httpService.getSeats(this.flightId).subscribe({
        next: (data) => { this.seats = data; },
        error: () => {
          this.showError = true;
          this.errorMessage = 'Could not load seats.';
        }
      })
    );
  }

  onSeatSelected(seatNum: string): void {
    this.selectedSeat = seatNum;
    this.subs.add(
      this.httpService.lockSeats(this.flightId, [seatNum]).subscribe({
        error: () => {
          this.showError = true;
          this.errorMessage = 'Seat could not be locked. It may be taken.';
          this.selectedSeat = '';
        }
      })
    );
  }

  proceedToPayment(): void {
    if (!this.selectedSeat || !this.flight) return;
    const userId = Number(this.authService.getUserId());
    this.subs.add(
      this.httpService.initiateBooking(this.flight.id, [this.selectedSeat], userId).subscribe({
        next: (booking: any) => {
          this.bookingFlow.pendingBookingId = booking.id;
          this.bookingFlow.seatNumbers = [this.selectedSeat];
          this.router.navigate(['/payment'], { queryParams: { bookingId: booking.id } });
        },
        error: (err) => {
          this.showError = true;
          this.errorMessage = err?.error?.message || 'Booking initiation failed.';
        }
      })
    );
  }
}
