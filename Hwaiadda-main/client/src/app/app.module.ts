import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyOtpComponent } from './auth/verify-otp/verify-otp.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LandingComponent } from './component/landing/landing.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FlightComponent } from './component/flight/flight.component';
import { FlightSearchComponent } from './component/flight-search/flight-search.component';
import { SeatSelectionPageComponent } from './component/seat-selection-page/seat-selection-page.component';
import { PaymentComponent } from './component/payment/payment.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import { AssignPilotComponent } from './component/assign-pilot/assign-pilot.component';
import { PilotScheduleComponent } from './component/pilot-schedule/pilot-schedule.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ViewuserComponent } from './component/viewuser/viewuser.component';
import { AdminAnalyticsComponent } from './component/admin-analytics/admin-analytics.component';
import { SeatSelectionComponent } from './component/seat/seat.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { BookingFlowService } from '../services/booking-flow.service';
import { LoadingService } from '../services/loading.service';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { LoadingInterceptor } from '../interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent, LoadingSpinnerComponent,
    LoginComponent, RegisterComponent, VerifyOtpComponent,
    ForgotPasswordComponent, ResetPasswordComponent,
    LandingComponent, DashboardComponent, FlightComponent,
    FlightSearchComponent, SeatSelectionPageComponent, PaymentComponent,
    BookingsComponent, AssignPilotComponent, PilotScheduleComponent,
    ProfilComponent, ViewuserComponent, AdminAnalyticsComponent,
    SeatSelectionComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule
  ],
  providers: [
    HttpService, AuthService, SessionService, BookingFlowService, LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
