import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form!: FormGroup;
  message = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.forgotPassword(this.form.value.email).subscribe({
      next: (res: any) => {
        this.message = res.message || 'Reset OTP sent to your email.';
        this.error = '';
        setTimeout(() => this.router.navigate(['/reset-password'], {
          queryParams: { email: this.form.value.email }
        }), 1200);
      },
      error: (err) => {
        this.error = err?.error?.message || 'Request failed.';
        this.message = '';
      }
    });
  }
}
