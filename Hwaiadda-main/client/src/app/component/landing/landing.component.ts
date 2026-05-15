import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { BookingFlowService } from '../../../services/booking-flow.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  searchForm!: FormGroup;

  destinations = [
    { city: 'Delhi', code: 'DEL', img: '🏛️' },
    { city: 'Mumbai', code: 'BOM', img: '🌊' },
    { city: 'Bengaluru', code: 'BLR', img: '🌆' },
    { city: 'Chennai', code: 'MAA', img: '🏖️' },
    { city: 'Kolkata', code: 'CCU', img: '🎭' },
    { city: 'Hyderabad', code: 'HYD', img: '🏰' }
  ];

  features = [
    { icon: '✈️', title: 'Wide Network', desc: 'Connect to major cities across India and beyond.' },
    { icon: '🔒', title: 'Secure Booking', desc: 'JWT auth, OTP verification, and encrypted payments.' },
    { icon: '💺', title: 'Easy Seat Selection', desc: 'Interactive seat map with real-time availability.' },
    { icon: '📱', title: '24/7 Support', desc: 'Manage bookings anytime from any device.' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private bookingFlow: BookingFlowService
  ) {}

  ngOnInit(): void {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.searchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: [tomorrow.toISOString().split('T')[0], Validators.required],
      adult: [1, Validators.min(1)],
      child: [0],
      infant: [0]
    });
  }

  onSearch(): void {
    if (this.searchForm.invalid) return;
    this.bookingFlow.setSearchParams(this.searchForm.value);
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/search_flight']);
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/search_flight' } });
    }
  }
}
