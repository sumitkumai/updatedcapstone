import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface LoginPayload {
  username: string;
  password: string;
  captchaToken?: string;
}

export interface AuthResponse {
  token: string;
  refreshToken?: string;
  username: string;
  email: string;
  role: string;
  id: number;
  sessionId?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/register`, data);
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/verify-otp`, { email, otp });
  }

  login(credentials: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/api/auth/login`, credentials);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/forgot-password`, { email });
  }

  resetPassword(email: string, otp: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/reset-password`, { email, otp, newPassword });
  }

  pingActivity(): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/user/activity`, {});
  }

  logoutServer(): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/logout`, {});
  }

  logoutAllDevices(): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/logout-all`, {});
  }

  saveAuth(res: AuthResponse): void {
    localStorage.setItem('token', res.token);
    localStorage.setItem('role', res.role);
    localStorage.setItem('userId', String(res.id));
    localStorage.setItem('username', res.username);
    localStorage.setItem('email', res.email || '');
    if (res.sessionId) {
      localStorage.setItem('sessionId', res.sessionId);
    }
    if (res.refreshToken) {
      localStorage.setItem('refreshToken', res.refreshToken);
    }
    localStorage.setItem('lastActivity', String(Date.now()));
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  get getRole(): string {
    const token = this.getToken();
    if (!token) {
      return '';
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || localStorage.getItem('role') || '';
    } catch {
      return localStorage.getItem('role') || '';
    }
  }

  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  isLoggedIn(): boolean {
    return !!this.getToken() && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }

  touchActivity(): void {
    localStorage.setItem('lastActivity', String(Date.now()));
  }

  getLastActivity(): number {
    return Number(localStorage.getItem('lastActivity') || '0');
  }

  isInactive(): boolean {
    const last = this.getLastActivity();
    if (!last) {
      return false;
    }
    return Date.now() - last > environment.session.inactivityTimeoutMs;
  }

  clearLocal(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('sessionId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('lastActivity');
  }

  logout(): void {
    this.clearLocal();
  }
}
