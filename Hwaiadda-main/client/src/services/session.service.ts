import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class SessionService {

  private pingSub?: Subscription;
  private idleSub?: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) {}

  start(): void {
    this.stop();
    if (!this.authService.isLoggedIn()) {
      return;
    }
    this.authService.touchActivity();
    this.bindActivityListeners();

    this.zone.runOutsideAngular(() => {
      this.pingSub = interval(environment.session.activityPingIntervalMs).subscribe(() => {
        this.zone.run(() => this.onPing());
      });
      this.idleSub = interval(10000).subscribe(() => {
        this.zone.run(() => this.checkIdle());
      });
    });
  }

  stop(): void {
    this.pingSub?.unsubscribe();
    this.idleSub?.unsubscribe();
    this.pingSub = undefined;
    this.idleSub = undefined;
    this.unbindActivityListeners();
  }

  private onPing(): void {
    if (!this.authService.isLoggedIn()) {
      this.stop();
      return;
    }
    if (this.authService.isInactive()) {
      this.forceLogout('Session expired due to inactivity');
      return;
    }
    this.authService.pingActivity().subscribe({
      next: () => this.authService.touchActivity(),
      error: () => this.forceLogout('Session ended on server')
    });
  }

  private checkIdle(): void {
    if (this.authService.isLoggedIn() && this.authService.isInactive()) {
      this.forceLogout('Session expired due to inactivity');
    }
  }

  forceLogout(message?: string): void {
    const token = this.authService.getToken();
    this.stop();
    if (token) {
      this.authService.logoutServer().subscribe({ complete: () => this.finishLogout(message) });
    } else {
      this.finishLogout(message);
    }
  }

  private finishLogout(message?: string): void {
    this.authService.logout();
    this.router.navigate(['/login'], {
      queryParams: message ? { reason: message } : {}
    });
  }

  private activityHandler = () => this.authService.touchActivity();

  private bindActivityListeners(): void {
    ['click', 'keydown', 'mousemove', 'scroll'].forEach(evt =>
      window.addEventListener(evt, this.activityHandler, { passive: true })
    );
  }

  private unbindActivityListeners(): void {
    ['click', 'keydown', 'mousemove', 'scroll'].forEach(evt =>
      window.removeEventListener(evt, this.activityHandler)
    );
  }
}
