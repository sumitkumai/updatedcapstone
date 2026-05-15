import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'search_flight', component: FlightSearchComponent, canActivate: [AuthGuard] },
  { path: 'seat-selection/:id', component: SeatSelectionPageComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'my_booking', component: BookingsComponent, canActivate: [AuthGuard] },
  { path: 'my_profile', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'pilot-schedule', component: PilotScheduleComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['PILOT'] } },
  { path: 'add_flights', component: FlightComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
  { path: 'view_all_user', component: ViewuserComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
  { path: 'admin/analytics', component: AdminAnalyticsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
  { path: 'assign_pilot', component: AssignPilotComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
