import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    let authReq = req;
    if (token && !req.url.includes('/api/auth/login') && !req.url.includes('/api/auth/register')
        && !req.url.includes('/api/auth/verify-otp') && !req.url.includes('/api/auth/forgot-password')
        && !req.url.includes('/api/auth/reset-password')) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          const isAuthCall = req.url.includes('/api/auth/login') || req.url.includes('/api/auth/register');
          if (!isAuthCall && this.authService.getToken()) {
            this.sessionService.stop();
            this.authService.logout();
            this.router.navigate(['/login'], { queryParams: { reason: err.error?.message || 'Session expired' } });
          }
        }
        return throwError(() => err);
      })
    );
  }
}
