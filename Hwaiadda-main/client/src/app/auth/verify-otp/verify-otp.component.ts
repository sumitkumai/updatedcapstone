import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { BookingFlowService } from '../../../services/booking-flow.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit, OnDestroy {
  otpForm!: FormGroup;
  email = '';
  showMessage = false;
  showError = false;
  responseMessage = '';
  errorMessage = '';
  private subs = new Subscription();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private bookingFlow: BookingFlowService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.route.queryParams.subscribe(params => {
        this.email = params['email'] || this.bookingFlow.pendingEmail || history.state?.email || '';
        if (!this.email) {
          this.router.navigate(['/register']);
        }
      })
    );
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onVerify(): void {
    if (this.otpForm.invalid || !this.email) return;
    this.subs.add(
      this.authService.verifyOtp(this.email, this.otpForm.value.otp).subscribe({
        next: () => {
          this.showMessage = true;
          this.responseMessage = 'Account verified! Redirecting to login...';
          this.bookingFlow.pendingEmail = '';
          setTimeout(() => this.router.navigate(['/login']), 1500);
        },
        error: (err) => {
          this.showError = true;
          this.errorMessage = err?.error?.message || 'Invalid or expired OTP.';
        }
      })
    );
  }
}
