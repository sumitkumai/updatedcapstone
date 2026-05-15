import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { BookingFlowService } from '../../../services/booking-flow.service';
import { environment } from '../../../environments/environment';

declare const Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {
  bookingId = 0;
  amount = 0;
  processing = false;
  showError = false;
  showSuccess = false;
  errorMessage = '';
  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    public bookingFlow: BookingFlowService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.route.queryParams.subscribe(params => {
        this.bookingId = Number(params['bookingId']) || this.bookingFlow.pendingBookingId || 0;
        if (!this.bookingId) {
          this.router.navigate(['/search_flight']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  pay(): void {
    if (!this.bookingId) return;
    this.processing = true;
    this.showError = false;

    this.subs.add(
      this.httpService.createPaymentOrder(this.bookingId).subscribe({
        next: (order: any) => {
          this.amount = order.amount;
          if (order.simulated === true || order.simulated === 'true' || !environment.razorpay.enabled) {
            this.simulatePay();
          } else {
            this.openRazorpay(order);
          }
        },
        error: (err) => {
          this.processing = false;
          this.showError = true;
          this.errorMessage = err?.error?.message || 'Could not create payment order.';
        }
      })
    );
  }

  private simulatePay(): void {
    this.subs.add(
      this.httpService.simulatePayment(this.bookingId).subscribe({
        next: () => this.onSuccess(),
        error: (err) => this.onFail(err)
      })
    );
  }

  private openRazorpay(order: any): void {
    if (typeof Razorpay === 'undefined') {
      this.processing = false;
      this.showError = true;
      this.errorMessage = 'Payment gateway not loaded.';
      return;
    }
    const options = {
      key: order.keyId || environment.razorpay.keyId,
      amount: Math.round(order.amount * 100),
      currency: order.currency || 'INR',
      name: 'Bharat Airlines',
      description: `Booking #${this.bookingId}`,
      order_id: order.orderId,
      handler: (response: any) => {
        this.subs.add(
          this.httpService.verifyPayment(
            this.bookingId,
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          ).subscribe({
            next: () => this.onSuccess(),
            error: (err) => this.onFail(err)
          })
        );
      },
      modal: {
        ondismiss: () => { this.processing = false; }
      }
    };
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', () => {
      this.processing = false;
      this.showError = true;
      this.errorMessage = 'Payment failed. Please try again.';
    });
    rzp.open();
    this.processing = false;
  }

  private onSuccess(): void {
    this.processing = false;
    this.showSuccess = true;
    this.bookingFlow.clear();
    setTimeout(() => this.router.navigate(['/my_booking']), 2000);
  }

  private onFail(err: any): void {
    this.processing = false;
    this.showError = true;
    this.errorMessage = err?.error?.message || 'Payment failed.';
  }
}
