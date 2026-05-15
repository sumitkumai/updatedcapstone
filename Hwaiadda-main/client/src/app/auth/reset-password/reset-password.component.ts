import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form!: FormGroup;
  message = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatch });
    this.route.queryParams.subscribe(p => {
      if (p['email']) {
        this.form.patchValue({ email: p['email'] });
      }
    });
  }

  passwordMatch(group: FormGroup): null {
    const pass = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    if (pass !== confirm) {
      group.get('confirmPassword')?.setErrors({ mismatch: true });
    }
    return null;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const { email, otp, newPassword } = this.form.value;
    this.authService.resetPassword(email, otp, newPassword).subscribe({
      next: (res: any) => {
        this.message = res.message || 'Password reset successful.';
        this.error = '';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.error = err?.error?.message || 'Reset failed.';
        this.message = '';
      }
    });
  }
}
