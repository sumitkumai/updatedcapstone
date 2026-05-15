import { Injectable } from '@angular/core';

export interface FlightSearchParams {
  source: string;
  destination: string;
  date: string;
  adult?: number;
  child?: number;
  infant?: number;
  travelClass?: string;
}

@Injectable({ providedIn: 'root' })
export class BookingFlowService {
  searchParams: FlightSearchParams | null = null;
  selectedFlight: any = null;
  seatNumbers: string[] = [];
  pendingBookingId: number | null = null;
  totalPrice = 0;
  pendingEmail = '';

  setSearchParams(params: FlightSearchParams): void {
    this.searchParams = params;
  }

  setFlight(flight: any, totalPrice: number): void {
    this.selectedFlight = flight;
    this.totalPrice = totalPrice;
    this.seatNumbers = [];
    this.pendingBookingId = null;
  }

  clear(): void {
    this.searchParams = null;
    this.selectedFlight = null;
    this.seatNumbers = [];
    this.pendingBookingId = null;
    this.totalPrice = 0;
  }
}
