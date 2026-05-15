import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showNavbar = true;
  private subs = new Subscription();

  constructor(
    public authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.sessionService.start();
    }
    this.updateNavbar(this.router.url);
    this.subs.add(
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
        this.updateNavbar(e.urlAfterRedirects || e.url);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private updateNavbar(url: string): void {
    this.showNavbar = url === '/' || url.startsWith('/login') || url.startsWith('/register')
      || url.startsWith('/verify-otp') || url.startsWith('/forgot-password')
      || url.startsWith('/reset-password') ? false : true;
  }

  get role(): string {
    return this.authService.getRole;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.sessionService.forceLogout();
  }
}
