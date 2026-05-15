import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { BookingFlowService } from '../../../services/booking-flow.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  showError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private bookingFlow: BookingFlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contactNumber: [''],
      role: ['PASSENGER', Validators.required]
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const formData = { ...this.registerForm.value };
    if (!formData.contactNumber) {
      delete formData.contactNumber;
    } else {
      formData.contactNumber = Number(formData.contactNumber);
    }
    this.authService.register(formData).subscribe({
      next: (res: any) => {
        const email = res.email || formData.email;
        this.bookingFlow.pendingEmail = email;
        this.router.navigate(['/verify-otp'], { queryParams: { email } });
      },
      error: (err) => {
        this.showError = true;
        this.errorMessage = err?.error?.message || 'Registration failed.';
      }
    });
  }
}
