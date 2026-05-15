import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn() && !this.authService.isInactive()) {
      return true;
    }
    this.authService.logout();
    this.router.navigate(['/login'], { queryParams: { reason: 'Please login to continue' } });
    return false;
  }
}
