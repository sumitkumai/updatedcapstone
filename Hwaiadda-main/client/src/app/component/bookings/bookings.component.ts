import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';
import { BookingFlowService } from '../../../services/booking-flow.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit, OnDestroy {

  bookings: any[] = [];
  showMessage = false;
  showError = false;
  responseMessage = '';
  errorMessage = '';
  private subs = new Subscription();

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private bookingFlow: BookingFlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadBookings(): void {
    this.subs.add(this.httpService.getMyBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        this.showError = false;
      },
      error: () => {
        this.showError = true;
        this.errorMessage = 'Failed to load bookings.';
      }
    }));
  }

  cancelBooking(id: number): void {
    this.subs.add(this.httpService.updateBookingStatus(id, 'CANCELLED').subscribe({
      next: () => {
        this.showMessage = true;
        this.responseMessage = 'Booking cancelled successfully.';
        this.loadBookings();
      },
      error: (err) => {
        this.showError = true;
        this.errorMessage = err?.error?.message || 'Failed to cancel booking.';
      }
    }));
  }

  retryPayment(bookingId: number): void {
    this.bookingFlow.pendingBookingId = bookingId;
    this.router.navigate(['/payment'], { queryParams: { bookingId } });
  }

  downloadTicket(id: number): void {
    this.subs.add(this.httpService.downloadTicket(id).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ticket.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => {
        this.showError = true;
        this.errorMessage = 'Failed to download ticket. Payment must be successful.';
      }
    }));
  }
}
