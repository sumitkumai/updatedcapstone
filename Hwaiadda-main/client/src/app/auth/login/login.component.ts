import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SessionService } from '../../../services/session.service';
import { environment } from '../../../environments/environment';

declare const grecaptcha: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showError = false;
  errorMessage = '';
  captchaEnabled = environment.recaptcha.enabled;
  recaptchaSiteKey = environment.recaptcha.siteKey;
  captchaToken = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.route.queryParams.subscribe(p => {
      if (p['reason']) {
        this.showError = true;
        this.errorMessage = p['reason'];
      }
    });
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.captchaEnabled) {
      setTimeout(() => this.renderCaptcha(), 500);
    }
  }

  onCaptchaResolved(token: string): void {
    this.captchaToken = token;
  }

  private renderCaptcha(): void {
    if (typeof grecaptcha === 'undefined') {
      return;
    }
    const el = document.getElementById('recaptcha-login');
    if (el && el.childElementCount === 0) {
      grecaptcha.render('recaptcha-login', {
        sitekey: this.recaptchaSiteKey,
        callback: (token: string) => this.onCaptchaResolved(token),
        'expired-callback': () => { this.captchaToken = ''; }
      });
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    if (this.captchaEnabled && !this.captchaToken) {
      this.showError = true;
      this.errorMessage = 'Please complete the CAPTCHA.';
      return;
    }
    const payload: any = { ...this.loginForm.value };
    if (this.captchaEnabled) {
      payload.captchaToken = this.captchaToken;
    }
    this.authService.login(payload).subscribe({
      next: (res) => {
        this.authService.saveAuth(res);
        this.sessionService.start();
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.showError = true;
        this.errorMessage = err?.error?.message || 'Invalid credentials.';
        if (this.captchaEnabled && typeof grecaptcha !== 'undefined') {
          grecaptcha.reset();
          this.captchaToken = '';
        }
      }
    });
  }
}
