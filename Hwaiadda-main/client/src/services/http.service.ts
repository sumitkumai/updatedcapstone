import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  public serverName = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
  }

  private unwrap<T>() {
    return map((res: any) => (res?.data !== undefined ? res.data : res) as T);
  }

  getAllFlights(): Observable<any[]> {
    return this.http.get<any>(`${this.serverName}/api/flights`, { headers: this.getHeaders() })
      .pipe(this.unwrap<any[]>());
  }

  createFlight(flight: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/flights`, flight, { headers: this.getHeaders() });
  }

  updateFlight(id: number, flight: any): Observable<any> {
    return this.http.put(`${this.serverName}/api/flights/${id}`, flight, { headers: this.getHeaders() });
  }

  searchFlights(source: string, destination: string, date: string, filters?: {
    minPrice?: number; maxPrice?: number; sortBy?: string;
  }): Observable<any[]> {
    let params = new HttpParams()
      .set('source', source)
      .set('destination', destination)
      .set('date', date);
    if (filters?.minPrice != null) params = params.set('minPrice', filters.minPrice);
    if (filters?.maxPrice != null) params = params.set('maxPrice', filters.maxPrice);
    if (filters?.sortBy) params = params.set('sortBy', filters.sortBy);
    return this.http.get<any>(`${this.serverName}/api/flights/search`, { headers: this.getHeaders(), params })
      .pipe(this.unwrap<any[]>());
  }

  suggestSource(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverName}/api/flights/source/suggest`, { headers: this.getHeaders() });
  }

  suggestDestination(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverName}/api/flights/destination/suggest`, { headers: this.getHeaders() });
  }

  checkAvailability(flightId: number, travelerCount: number): Observable<any> {
    const params = new HttpParams().set('travelerCount', travelerCount.toString());
    return this.http.get(`${this.serverName}/api/flights/${flightId}/check-availability`,
      { headers: this.getHeaders(), params });
  }

  initiateBooking(flightId: number, seatNumbers: string[], userId: number): Observable<any> {
    return this.http.post<any>(`${this.serverName}/api/booking/initiate`,
      { flightId, seatNumbers, userId }, { headers: this.getHeaders() })
      .pipe(this.unwrap<any>());
  }

  createPaymentOrder(bookingId: number): Observable<any> {
    return this.http.post<any>(`${this.serverName}/api/payment/create-order/${bookingId}`, {},
      { headers: this.getHeaders() }).pipe(this.unwrap<any>());
  }

  simulatePayment(bookingId: number): Observable<any> {
    return this.http.post<any>(`${this.serverName}/api/payment/simulate-success/${bookingId}`, {},
      { headers: this.getHeaders() }).pipe(this.unwrap<any>());
  }

  verifyPayment(bookingId: number, paymentId: string, orderId: string, signature: string): Observable<any> {
    return this.http.post<any>(`${this.serverName}/api/payment/verify`,
      { bookingId: String(bookingId), paymentId, orderId, signature },
      { headers: this.getHeaders() }).pipe(this.unwrap<any>());
  }

  retryPayment(bookingId: number): Observable<any> {
    return this.http.post<any>(`${this.serverName}/api/payment/retry/${bookingId}`, {},
      { headers: this.getHeaders() }).pipe(this.unwrap<any>());
  }

  getMyBookings(): Observable<any[]> {
    return this.http.get<any>(`${this.serverName}/api/booking/bookings`, { headers: this.getHeaders() })
      .pipe(this.unwrap<any[]>());
  }

  getAllBookings(): Observable<any[]> {
    return this.http.get<any>(`${this.serverName}/api/booking/bookingList`, { headers: this.getHeaders() })
      .pipe(this.unwrap<any[]>());
  }

  updateBookingStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.serverName}/api/booking/${id}/status`, { status },
      { headers: this.getHeaders() }).pipe(this.unwrap<any>());
  }

  cancelBooking(id: number): Observable<any> {
    return this.http.delete(`${this.serverName}/api/booking/bookings/${id}`, { headers: this.getHeaders() })
      .pipe(this.unwrap<any>());
  }

  downloadTicket(id: number): Observable<Blob> {
    return this.http.get(`${this.serverName}/api/booking/ticket/${id}`,
      { headers: this.getHeaders(), responseType: 'blob' });
  }

  getAnalytics(): Observable<any> {
    return this.http.get<any>(`${this.serverName}/api/admin/analytics/dashboard`, { headers: this.getHeaders() })
      .pipe(this.unwrap<any>());
  }

  lockSeats(flightId: number, seatNumbers: string[]): Observable<any> {
    return this.http.post(`${this.serverName}/api/seats/flights/${flightId}/lock`,
      { seatNumbers }, { headers: this.getHeaders() }).pipe(this.unwrap<any>());
  }

  getPilots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverName}/api/pilot/schedule/users`, { headers: this.getHeaders() });
  }

  getAllSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverName}/api/pilot/schedule`, { headers: this.getHeaders() });
  }

  getMySchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverName}/api/pilot/schedule/scheduleUser`, { headers: this.getHeaders() });
  }

  assignPilot(flightId: number, pilotId: number, scheduledDate: string, assignStatus: string): Observable<any> {
    const params = new HttpParams()
      .set('flightId', flightId.toString())
      .set('pilotId', pilotId.toString())
      .set('scheduledDate', scheduledDate)
      .set('assignStatus', assignStatus);
    return this.http.post(`${this.serverName}/api/pilot/schedule/admin/assign-pilot`, null,
      { headers: this.getHeaders(), params });
  }

  updateScheduleStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.serverName}/api/pilot/schedule/${id}/status`, { status },
      { headers: this.getHeaders() });
  }

  getSeats(flightId: number): Observable<any[]> {
    return this.http.get<any>(`${this.serverName}/api/seats/flights/${flightId}/seats`, { headers: this.getHeaders() })
      .pipe(this.unwrap<any[]>());
  }
}
