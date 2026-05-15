"use strict";
(self["webpackChunkonlinebookstore"] = self["webpackChunkonlinebookstore"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register/register.component */ 7225);
/* harmony import */ var _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/verify-otp/verify-otp.component */ 9609);
/* harmony import */ var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/forgot-password/forgot-password.component */ 3866);
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ 8310);
/* harmony import */ var _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/landing/landing.component */ 5409);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 6398);
/* harmony import */ var _component_flight_flight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/flight/flight.component */ 8165);
/* harmony import */ var _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/flight-search/flight-search.component */ 1170);
/* harmony import */ var _component_seat_selection_page_seat_selection_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/seat-selection-page/seat-selection-page.component */ 1177);
/* harmony import */ var _component_payment_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/payment/payment.component */ 9958);
/* harmony import */ var _component_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/bookings/bookings.component */ 2641);
/* harmony import */ var _component_assign_pilot_assign_pilot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/assign-pilot/assign-pilot.component */ 7787);
/* harmony import */ var _component_pilot_schedule_pilot_schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/pilot-schedule/pilot-schedule.component */ 7940);
/* harmony import */ var _component_profil_profil_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/profil/profil.component */ 3226);
/* harmony import */ var _component_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/viewuser/viewuser.component */ 8010);
/* harmony import */ var _component_admin_analytics_admin_analytics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/admin-analytics/admin-analytics.component */ 1931);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role.guard */ 5055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2560);






















const routes = [
    { path: '', component: _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__.LandingComponent },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'verify-otp', component: _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_2__.VerifyOtpComponent },
    { path: 'forgot-password', component: _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent },
    { path: 'reset-password', component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent },
    { path: 'dashboard', component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard] },
    { path: 'search_flight', component: _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_8__.FlightSearchComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard] },
    { path: 'seat-selection/:id', component: _component_seat_selection_page_seat_selection_page_component__WEBPACK_IMPORTED_MODULE_9__.SeatSelectionPageComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard] },
    { path: 'payment', component: _component_payment_payment_component__WEBPACK_IMPORTED_MODULE_10__.PaymentComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard] },
    { path: 'my_booking', component: _component_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_11__.BookingsComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard] },
    { path: 'my_profile', component: _component_profil_profil_component__WEBPACK_IMPORTED_MODULE_14__.ProfilComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard] },
    { path: 'pilot-schedule', component: _component_pilot_schedule_pilot_schedule_component__WEBPACK_IMPORTED_MODULE_13__.PilotScheduleComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard, _role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard], data: { roles: ['PILOT'] } },
    { path: 'add_flights', component: _component_flight_flight_component__WEBPACK_IMPORTED_MODULE_7__.FlightComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard, _role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard], data: { roles: ['ADMIN'] } },
    { path: 'view_all_user', component: _component_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_15__.ViewuserComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard, _role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard], data: { roles: ['ADMIN'] } },
    { path: 'admin/analytics', component: _component_admin_analytics_admin_analytics_component__WEBPACK_IMPORTED_MODULE_16__.AdminAnalyticsComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard, _role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard], data: { roles: ['ADMIN'] } },
    { path: 'assign_pilot', component: _component_assign_pilot_assign_pilot_component__WEBPACK_IMPORTED_MODULE_12__.AssignPilotComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard, _role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard], data: { roles: ['ADMIN'] } },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2567);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session.service */ 5920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ 2152);









function AppComponent_nav_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 8)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 8)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 8)(8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 8)(11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 8)(14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Assign Pilot");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AppComponent_nav_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 8)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 8)(5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 8)(8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 8)(11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AppComponent_nav_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 8)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 8)(5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "My Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 8)(8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AppComponent_nav_1_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 8)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AppComponent_nav_1_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 8)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AppComponent_nav_1_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 8)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_nav_1_li_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AppComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 1)(1, "a", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u2708");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Bharat Airlines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_nav_1_ng_container_7_Template, 16, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_nav_1_ng_container_8_Template, 13, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_nav_1_ng_container_9_Template, 10, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AppComponent_nav_1_li_10_Template, 3, 0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_nav_1_li_11_Template, 3, 0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AppComponent_nav_1_li_12_Template, 3, 0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && ctx_r0.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && ctx_r0.role === "PASSENGER");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && ctx_r0.role === "PILOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);
} }
class AppComponent {
    constructor(authService, sessionService, router) {
        this.authService = authService;
        this.sessionService = sessionService;
        this.router = router;
        this.showNavbar = true;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.sessionService.start();
        }
        this.updateNavbar(this.router.url);
        this.subs.add(this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe((e) => {
            this.updateNavbar(e.urlAfterRedirects || e.url);
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    updateNavbar(url) {
        this.showNavbar = url === '/' || url.startsWith('/login') || url.startsWith('/register')
            || url.startsWith('/verify-otp') || url.startsWith('/forgot-password')
            || url.startsWith('/reset-password') ? false : true;
    }
    get role() {
        return this.authService.getRole;
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    logout() {
        this.sessionService.forceLogout();
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [["class", "navbar navbar-expand-lg navbar-bharat px-3", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-bharat", "px-3"], ["routerLink", "/", 1, "navbar-brand"], [1, "brand-icon"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "align-items-center"], [4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/dashboard", 1, "nav-link"], ["routerLink", "/admin/analytics", 1, "nav-link"], ["routerLink", "/add_flights", 1, "nav-link"], ["routerLink", "/view_all_user", 1, "nav-link"], ["routerLink", "/assign_pilot", 1, "nav-link"], ["routerLink", "/search_flight", 1, "nav-link"], ["routerLink", "/my_booking", 1, "nav-link"], ["routerLink", "/my_profile", 1, "nav-link"], ["routerLink", "/pilot-schedule", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "nav-link", "btn-register"], [1, "btn", "btn-outline-light", "btn-sm", "ms-2", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loading-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 13, 6, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showNavbar);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("app-content", ctx.showNavbar);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent], styles: [".navbar-bharat[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--bharat-blue), #0d5a8a);\n  box-shadow: 0 2px 12px rgba(10, 61, 98, 0.25);\n}\n.navbar-bharat[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: var(--bharat-white);\n  font-weight: 700;\n  text-decoration: none;\n}\n.navbar-bharat[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  color: var(--bharat-saffron);\n  margin-right: 0.35rem;\n}\n.navbar-bharat[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9) !important;\n  transition: color 0.2s;\n}\n.navbar-bharat[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--bharat-saffron) !important;\n}\n.navbar-bharat[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  background: var(--bharat-saffron);\n  border-radius: 6px;\n  padding: 0.25rem 0.75rem !important;\n  margin-left: 0.5rem;\n  color: var(--bharat-white) !important;\n}\n.navbar-bharat[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover {\n  background: #e88a2e;\n}\n.app-content[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtEQUFBO0VBQ0EsNkNBQUE7QUFDRjtBQUNFO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7QUFDTjtBQUdFO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtBQURKO0FBR0k7RUFDRSx1Q0FBQTtBQUROO0FBS0U7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBSEo7QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFRQTtFQUNFLGVBQUE7QUFMRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJoYXJhdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYmhhcmF0LWJsdWUpLCAjMGQ1YThhKTtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDEwLCA2MSwgOTgsIDAuMjUpO1xuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtd2hpdGUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgLmJyYW5kLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWJoYXJhdC1zYWZmcm9uKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4zNXJlbTtcbiAgICB9XG4gIH1cblxuICAubmF2LWxpbmsge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tYmhhcmF0LXNhZmZyb24pICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1yZWdpc3RlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmhhcmF0LXNhZmZyb24pO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtd2hpdGUpICFpbXBvcnRhbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlODhhMmU7XG4gICAgfVxuICB9XG59XG5cbi5hcHAtY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbiJdfQ== */"] }); }
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ 7225);
/* harmony import */ var _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/verify-otp/verify-otp.component */ 9609);
/* harmony import */ var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/forgot-password/forgot-password.component */ 3866);
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ 8310);
/* harmony import */ var _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/landing/landing.component */ 5409);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 6398);
/* harmony import */ var _component_flight_flight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/flight/flight.component */ 8165);
/* harmony import */ var _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/flight-search/flight-search.component */ 1170);
/* harmony import */ var _component_seat_selection_page_seat_selection_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/seat-selection-page/seat-selection-page.component */ 1177);
/* harmony import */ var _component_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/payment/payment.component */ 9958);
/* harmony import */ var _component_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/bookings/bookings.component */ 2641);
/* harmony import */ var _component_assign_pilot_assign_pilot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/assign-pilot/assign-pilot.component */ 7787);
/* harmony import */ var _component_pilot_schedule_pilot_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/pilot-schedule/pilot-schedule.component */ 7940);
/* harmony import */ var _component_profil_profil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/profil/profil.component */ 3226);
/* harmony import */ var _component_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/viewuser/viewuser.component */ 8010);
/* harmony import */ var _component_admin_analytics_admin_analytics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/admin-analytics/admin-analytics.component */ 1931);
/* harmony import */ var _component_seat_seat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/seat/seat.component */ 5525);
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ 2152);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/http.service */ 3119);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/auth.service */ 2567);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/session.service */ 5920);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/booking-flow.service */ 9200);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/loading.service */ 8029);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../interceptors/auth.interceptor */ 6701);
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../interceptors/loading.interceptor */ 1653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 2560);


































class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [
            _services_http_service__WEBPACK_IMPORTED_MODULE_21__.HttpService, _services_auth_service__WEBPACK_IMPORTED_MODULE_22__.AuthService, _services_session_service__WEBPACK_IMPORTED_MODULE_23__.SessionService, _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_24__.BookingFlowService, _services_loading_service__WEBPACK_IMPORTED_MODULE_25__.LoadingService,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HTTP_INTERCEPTORS, useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__.AuthInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HTTP_INTERCEPTORS, useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_27__.LoadingInterceptor, multi: true }
        ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__.LoadingSpinnerComponent,
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_4__.VerifyOtpComponent,
        _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent, _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordComponent,
        _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__.LandingComponent, _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent, _component_flight_flight_component__WEBPACK_IMPORTED_MODULE_9__.FlightComponent,
        _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_10__.FlightSearchComponent, _component_seat_selection_page_seat_selection_page_component__WEBPACK_IMPORTED_MODULE_11__.SeatSelectionPageComponent, _component_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__.PaymentComponent,
        _component_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_13__.BookingsComponent, _component_assign_pilot_assign_pilot_component__WEBPACK_IMPORTED_MODULE_14__.AssignPilotComponent, _component_pilot_schedule_pilot_schedule_component__WEBPACK_IMPORTED_MODULE_15__.PilotScheduleComponent,
        _component_profil_profil_component__WEBPACK_IMPORTED_MODULE_16__.ProfilComponent, _component_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_17__.ViewuserComponent, _component_admin_analytics_admin_analytics_component__WEBPACK_IMPORTED_MODULE_18__.AdminAnalyticsComponent,
        _component_seat_seat_component__WEBPACK_IMPORTED_MODULE_19__.SeatSelectionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedIn() && !this.authService.isInactive()) {
            return true;
        }
        this.authService.logout();
        this.router.navigate(['/login'], { queryParams: { reason: 'Please login to continue' } });
        return false;
    }
    static { this.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 3866:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function ForgotPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function ForgotPasswordComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
} }
class ForgotPasswordComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.message = '';
        this.error = '';
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
        });
    }
    submit() {
        if (this.form.invalid) {
            return;
        }
        this.authService.forgotPassword(this.form.value.email).subscribe({
            next: (res) => {
                this.message = res.message || 'Reset OTP sent to your email.';
                this.error = '';
                setTimeout(() => this.router.navigate(['/reset-password'], {
                    queryParams: { email: this.form.value.email }
                }), 1200);
            },
            error: (err) => {
                this.error = err?.error?.message || 'Request failed.';
                this.message = '';
            }
        });
    }
    static { this.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 18, vars: 4, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "80vh"], [1, "card", "p-4", "shadow", 2, "width", "400px"], [1, "text-center"], [1, "text-muted", "text-center"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/login"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Forgot Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter your registered email to receive a reset OTP.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ForgotPasswordComponent_div_7_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_8_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Send OTP");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 11)(16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Back to login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ 5920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, authService, sessionService, router, route) {
        this.fb = fb;
        this.authService = authService;
        this.sessionService = sessionService;
        this.router = router;
        this.route = route;
        this.showError = false;
        this.errorMessage = '';
        this.captchaEnabled = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.recaptcha.enabled;
        this.recaptchaSiteKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.recaptcha.siteKey;
        this.captchaToken = '';
    }
    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
            return;
        }
        this.route.queryParams.subscribe(p => {
            if (p['reason']) {
                this.showError = true;
                this.errorMessage = p['reason'];
            }
        });
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        if (this.captchaEnabled) {
            setTimeout(() => this.renderCaptcha(), 500);
        }
    }
    onCaptchaResolved(token) {
        this.captchaToken = token;
    }
    renderCaptcha() {
        if (typeof grecaptcha === 'undefined') {
            return;
        }
        const el = document.getElementById('recaptcha-login');
        if (el && el.childElementCount === 0) {
            grecaptcha.render('recaptcha-login', {
                sitekey: this.recaptchaSiteKey,
                callback: (token) => this.onCaptchaResolved(token),
                'expired-callback': () => { this.captchaToken = ''; }
            });
        }
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        if (this.captchaEnabled && !this.captchaToken) {
            this.showError = true;
            this.errorMessage = 'Please complete the CAPTCHA.';
            return;
        }
        const payload = { ...this.loginForm.value };
        if (this.captchaEnabled) {
            payload.captchaToken = this.captchaToken;
        }
        this.authService.login(payload).subscribe({
            next: (res) => {
                this.authService.saveAuth(res);
                this.sessionService.start();
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
                this.router.navigateByUrl(returnUrl);
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Invalid credentials.';
                if (this.captchaEnabled && typeof grecaptcha !== 'undefined') {
                    grecaptcha.reset();
                    this.captchaToken = '';
                }
            }
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 4, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "80vh"], [1, "card", "p-4", "shadow", 2, "width", "400px"], [1, "text-center", "mb-1"], [1, "text-center", "text-muted", "mb-3"], ["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "username", "placeholder", "Enter username", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control"], ["class", "mb-3", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "text-center", "mt-2", "mb-0"], ["routerLink", "/forgot-password"], [1, "text-center", "mt-2"], ["routerLink", "/register"], [1, "alert", "alert-danger"], ["id", "recaptcha-login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u2708 AIRLINE BOOKING");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Please enter your credentials");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 12)(20, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Forgot password?");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Don't have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 15)(25, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.captchaEnabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["@charset \"UTF-8\";\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.d-flex.justify-content-center.align-items-center[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: radial-gradient(ellipse at 30% 20%, rgba(140, 29, 24, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 60%), var(--ai-bg);\n}\n.d-flex.justify-content-center.align-items-center[_ngcontent-%COMP%]::before {\n  content: \"\u2708\";\n  position: absolute;\n  top: 12%;\n  left: 8%;\n  font-size: 9rem;\n  opacity: 0.03;\n  color: var(--ai-primary);\n  transform: rotate(-30deg);\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.d-flex.justify-content-center.align-items-center[_ngcontent-%COMP%]::after {\n  content: \"\u2708\";\n  position: absolute;\n  bottom: 12%;\n  right: 8%;\n  font-size: 6rem;\n  opacity: 0.03;\n  color: var(--ai-primary);\n  transform: rotate(15deg);\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px !important;\n  border: 1px solid rgba(140, 29, 24, 0.1) !important;\n  box-shadow: 0 24px 56px rgba(140, 29, 24, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06) !important;\n  animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;\n  background: #FFFFFF !important;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, var(--ai-primary) 0%, var(--ai-gold) 100%);\n  z-index: 1;\n}\n.card.p-4[_ngcontent-%COMP%] {\n  padding: 2.5rem 2rem !important;\n}\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--ai-primary);\n  letter-spacing: -0.02em;\n}\n.card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--ai-text-muted) !important;\n}\n.card[_ngcontent-%COMP%]   .btn-primary.w-100[_ngcontent-%COMP%] {\n  height: 46px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  border-radius: 10px !important;\n  margin-top: 0.25rem;\n}\n.card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ai-text-muted);\n}\n.card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ai-primary);\n  font-weight: 600;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUFJLGVBQUE7QUFESjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZMQUFBO0FBREY7QUFNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBTEo7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtREFBQTtFQUNBLDBGQUFBO0VBQ0EsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFVRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw2RUFBQTtFQUNBLFVBQUE7QUFSSjtBQVdFO0VBQVEsK0JBQUE7QUFSVjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUFSSjtBQVdFO0VBQWMsc0NBQUE7QUFSaEI7QUFXRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFWSjtBQVlJO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFWTjtBQVdNO0VBQVUsMEJBQUE7QUFSaEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPR0lOIFBBR0Ug4oCUIFByZW1pdW0gY2VudGVyZWQgYXV0aCBjYXJkXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYSB7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vLyBGdWxsLXBhZ2Ugd3JhcHBlclxuLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgMzAlIDIwJSwgcmdiYSgxNDAsMjksMjQsMC4wNikgMCUsIHRyYW5zcGFyZW50IDYwJSksXG4gICAgICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDcwJSA4MCUsIHJnYmEoMjAxLDE2OCw3NiwwLjA1KSAwJSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICAgICAgICAgICAgdmFyKC0tYWktYmcpO1xuXG4gIC8vIERlY29yYXRpdmUgcGxhbmUgd2F0ZXJtYXJrc1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfinIgnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEyJTtcbiAgICBsZWZ0OiA4JTtcbiAgICBmb250LXNpemU6IDlyZW07XG4gICAgb3BhY2l0eTogMC4wMztcbiAgICBjb2xvcjogdmFyKC0tYWktcHJpbWFyeSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAn4pyIJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMiU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBvcGFjaXR5OiAwLjAzO1xuICAgIGNvbG9yOiB2YXIoLS1haS1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbn1cblxuLy8gQXV0aCBjYXJkXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0MCwyOSwyNCwwLjEpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA1NnB4IHJnYmEoMTQwLDI5LDI0LDAuMTIpLCAwIDhweCAyMHB4IHJnYmEoMCwwLDAsMC4wNikgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjRzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSkgYm90aDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIEJ1cmd1bmR5LXRvLWdvbGQgdG9wIGFjY2VudCBiYXJcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1haS1wcmltYXJ5KSAwJSwgdmFyKC0tYWktZ29sZCkgMTAwJSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gICYucC00IHsgcGFkZGluZzogMi41cmVtIDJyZW0gIWltcG9ydGFudDsgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0tYWktcHJpbWFyeSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIH1cblxuICAudGV4dC1tdXRlZCB7IGNvbG9yOiB2YXIoLS1haS10ZXh0LW11dGVkKSAhaW1wb3J0YW50OyB9XG5cbiAgLy8gVGFsbCBwcmltYXJ5IENUQVxuICAuYnRuLXByaW1hcnkudy0xMDAge1xuICAgIGhlaWdodDogNDZweDtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIH1cblxuICBwLnRleHQtY2VudGVyIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1haS10ZXh0LW11dGVkKTtcblxuICAgIGEsIHN0cm9uZyBhLCBzdHJvbmcge1xuICAgICAgY29sb3I6IHZhcigtLWFpLXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] }); }
}


/***/ }),

/***/ 7225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function RegisterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class RegisterComponent {
    constructor(fb, authService, bookingFlow, router) {
        this.fb = fb;
        this.authService = authService;
        this.bookingFlow = bookingFlow;
        this.router = router;
        this.showError = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            contactNumber: [''],
            role: ['PASSENGER', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onRegister() {
        if (this.registerForm.invalid) {
            return;
        }
        const formData = { ...this.registerForm.value };
        if (!formData.contactNumber) {
            delete formData.contactNumber;
        }
        else {
            formData.contactNumber = Number(formData.contactNumber);
        }
        this.authService.register(formData).subscribe({
            next: (res) => {
                const email = res.email || formData.email;
                this.bookingFlow.pendingEmail = email;
                this.router.navigate(['/verify-otp'], { queryParams: { email } });
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Registration failed.';
            }
        });
    }
    static { this.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__.BookingFlowService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 38, vars: 3, consts: [[1, "auth-page", "page-enter"], [1, "auth-card"], [1, "section-title", "text-center"], [1, "text-center", "text-muted", "mb-3"], ["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "username", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "number", "formControlName", "contactNumber", 1, "form-control"], ["formControlName", "role", 1, "form-select"], ["value", "PASSENGER"], ["value", "PILOT"], ["type", "submit", 1, "btn-bharat-primary", "w-100", 3, "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/login"], [1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Bharat Airlines");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_div_6_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() { return ctx.onRegister(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6)(17, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6)(21, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Contact Number (optional)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 6)(25, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 12)(28, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Passenger");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Pilot");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Send OTP");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Already have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["@charset \"UTF-8\";\n.d-flex.justify-content-center.align-items-center[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: radial-gradient(ellipse at 70% 20%, rgba(140, 29, 24, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 60%), var(--ai-bg);\n}\n.d-flex.justify-content-center.align-items-center[_ngcontent-%COMP%]::before {\n  content: \"\u2708\";\n  position: absolute;\n  top: 10%;\n  right: 8%;\n  font-size: 9rem;\n  opacity: 0.03;\n  color: var(--ai-primary);\n  transform: rotate(20deg);\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.d-flex.justify-content-center.align-items-center[_ngcontent-%COMP%]::after {\n  content: \"\u2708\";\n  position: absolute;\n  bottom: 10%;\n  left: 8%;\n  font-size: 6rem;\n  opacity: 0.03;\n  color: var(--ai-primary);\n  transform: rotate(-20deg);\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px !important;\n  border: 1px solid rgba(140, 29, 24, 0.1) !important;\n  box-shadow: 0 24px 56px rgba(140, 29, 24, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06) !important;\n  animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;\n  background: #FFFFFF !important;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, var(--ai-primary) 0%, var(--ai-gold) 100%);\n  z-index: 1;\n}\n.card.p-4[_ngcontent-%COMP%] {\n  padding: 2.5rem 2rem !important;\n}\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--ai-primary);\n  letter-spacing: -0.02em;\n}\n.card[_ngcontent-%COMP%]   .btn-primary.w-100[_ngcontent-%COMP%] {\n  height: 46px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  border-radius: 10px !important;\n  margin-top: 0.25rem;\n}\n.card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ai-text-muted);\n}\n.card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ai-primary);\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   p.text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUtoQjtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2TEFBQTtBQUhGO0FBT0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQU5KO0FBV0E7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbURBQUE7RUFDQSwwRkFBQTtFQUNBLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVJGO0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUFTLFFBQUE7RUFDakIsV0FBQTtFQUNBLDZFQUFBO0VBQ0EsVUFBQTtBQU5KO0FBU0U7RUFBUSwrQkFBQTtBQU5WO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQU5KO0FBU0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVBKO0FBVUU7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FBUko7QUFTSTtFQUFJLHdCQUFBO0VBQTBCLGdCQUFBO0FBTGxDO0FBS29EO0VBQVUsMEJBQUE7QUFGOUQiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFR0lTVEVSIFBBR0Ug4oCUIE1pcnJvcnMgbG9naW4gY2FyZCB3aXRoIGV4dHJhIGZpZWxkc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEZ1bGwtcGFnZSB3cmFwcGVyXG4uZC1mbGV4Lmp1c3RpZnktY29udGVudC1jZW50ZXIuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCA3MCUgMjAlLCByZ2JhKDE0MCwyOSwyNCwwLjA2KSAwJSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgMzAlIDgwJSwgcmdiYSgyMDEsMTY4LDc2LDAuMDUpIDAlLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgICAgICAgICAgICB2YXIoLS1haS1iZyk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAn4pyIJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGZvbnQtc2l6ZTogOXJlbTtcbiAgICBvcGFjaXR5OiAwLjAzO1xuICAgIGNvbG9yOiB2YXIoLS1haS1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJ+KciCc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIGxlZnQ6IDglO1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBvcGFjaXR5OiAwLjAzO1xuICAgIGNvbG9yOiB2YXIoLS1haS1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59XG5cbi8vIEF1dGggY2FyZFxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDAsMjksMjQsMC4xKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDI0cHggNTZweCByZ2JhKDE0MCwyOSwyNCwwLjEyKSwgMCA4cHggMjBweCByZ2JhKDAsMCwwLDAuMDYpICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC40cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpIGJvdGg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWktcHJpbWFyeSkgMCUsIHZhcigtLWFpLWdvbGQpIDEwMCUpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAmLnAtNCB7IHBhZGRpbmc6IDIuNXJlbSAycmVtICFpbXBvcnRhbnQ7IH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHZhcigtLWFpLXByaW1hcnkpO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICB9XG5cbiAgLmJ0bi1wcmltYXJ5LnctMTAwIHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICB9XG5cbiAgcC50ZXh0LWNlbnRlciB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tYWktdGV4dC1tdXRlZCk7XG4gICAgYSB7IGNvbG9yOiB2YXIoLS1haS1wcmltYXJ5KTsgZm9udC13ZWlnaHQ6IDYwMDsgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9IH1cbiAgfVxufSJdfQ== */"] }); }
}


/***/ }),

/***/ 8310:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function ResetPasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function ResetPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function ResetPasswordComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(fb, authService, router, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.message = '';
        this.error = '';
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d{6}$/)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        }, { validators: this.passwordMatch });
        this.route.queryParams.subscribe(p => {
            if (p['email']) {
                this.form.patchValue({ email: p['email'] });
            }
        });
    }
    passwordMatch(group) {
        const pass = group.get('newPassword')?.value;
        const confirm = group.get('confirmPassword')?.value;
        if (pass !== confirm) {
            group.get('confirmPassword')?.setErrors({ mismatch: true });
        }
        return null;
    }
    submit() {
        if (this.form.invalid) {
            return;
        }
        const { email, otp, newPassword } = this.form.value;
        this.authService.resetPassword(email, otp, newPassword).subscribe({
            next: (res) => {
                this.message = res.message || 'Password reset successful.';
                this.error = '';
                setTimeout(() => this.router.navigate(['/login']), 1500);
            },
            error: (err) => {
                this.error = err?.error?.message || 'Reset failed.';
                this.message = '';
            }
        });
    }
    static { this.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 29, vars: 5, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "80vh"], [1, "card", "p-4", "shadow", 2, "width", "400px"], [1, "text-center"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "otp", "maxlength", "6", "placeholder", "6-digit OTP", 1, "form-control"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/login"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "text-danger", "small"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reset Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResetPasswordComponent_div_5_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "OTP");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "New Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6)(20, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Confirm Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ResetPasswordComponent_div_23_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Reset Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 14)(27, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Back to login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            let tmp_3_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_3_0.hasError("mismatch"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 9609:
/*!*********************************************************!*\
  !*** ./src/app/auth/verify-otp/verify-otp.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOtpComponent": () => (/* binding */ VerifyOtpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function VerifyOtpComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.responseMessage);
} }
function VerifyOtpComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class VerifyOtpComponent {
    constructor(fb, authService, bookingFlow, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.bookingFlow = bookingFlow;
        this.route = route;
        this.router = router;
        this.email = '';
        this.showMessage = false;
        this.showError = false;
        this.responseMessage = '';
        this.errorMessage = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    ngOnInit() {
        this.subs.add(this.route.queryParams.subscribe(params => {
            this.email = params['email'] || this.bookingFlow.pendingEmail || history.state?.email || '';
            if (!this.email) {
                this.router.navigate(['/register']);
            }
        }));
        this.otpForm = this.fb.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{6}$/)]]
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onVerify() {
        if (this.otpForm.invalid || !this.email)
            return;
        this.subs.add(this.authService.verifyOtp(this.email, this.otpForm.value.otp).subscribe({
            next: () => {
                this.showMessage = true;
                this.responseMessage = 'Account verified! Redirecting to login...';
                this.bookingFlow.pendingEmail = '';
                setTimeout(() => this.router.navigate(['/login']), 1500);
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Invalid or expired OTP.';
            }
        }));
    }
    static { this.ɵfac = function VerifyOtpComponent_Factory(t) { return new (t || VerifyOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__.BookingFlowService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerifyOtpComponent, selectors: [["app-verify-otp"]], decls: 20, vars: 5, consts: [[1, "auth-page", "page-enter"], [1, "auth-card"], [1, "section-title"], [1, "text-muted"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["formControlName", "otp", "maxlength", "6", "placeholder", "000000", 1, "form-control"], ["type", "submit", 1, "btn-bharat-primary", "w-100", 3, "disabled"], [1, "mt-3", "text-center"], ["routerLink", "/register"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function VerifyOtpComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Verify OTP");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter the 6-digit code sent to ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VerifyOtpComponent_div_8_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, VerifyOtpComponent_div_9_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function VerifyOtpComponent_Template_form_ngSubmit_10_listener() { return ctx.onVerify(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "OTP");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Verify");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 11)(18, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Back to Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.otpForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.otpForm.invalid);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: [".auth-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 2rem;\n  max-width: 420px;\n  width: 100%;\n  box-shadow: var(--bharat-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1vdHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6InZlcmlmeS1vdHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1wYWdlIHtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hdXRoLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iaGFyYXQtd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1iaGFyYXQtcmFkaXVzKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJoYXJhdC1zaGFkb3cpO1xufVxuIl19 */"] }); }
}


/***/ }),

/***/ 1931:
/*!************************************************************************!*\
  !*** ./src/app/component/admin-analytics/admin-analytics.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAnalyticsComponent": () => (/* binding */ AdminAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function AdminAnalyticsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin Analytics Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Total Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3)(18, "div", 4)(19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Avg Occupancy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3)(25, "div", 4)(26, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Cancellations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6)(31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "canvas", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "canvas", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "canvas", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.metrics.totalBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 4, ctx_r0.metrics.revenue, "1.0-0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 7, ctx_r0.metrics.averageOccupancy, "1.1-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.metrics.cancellationCount);
} }
chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_2__.registerables);
class AdminAnalyticsComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.metrics = null;
        this.charts = [];
    }
    ngOnInit() {
        this.sub = this.httpService.getAnalytics().subscribe({
            next: (data) => {
                this.metrics = data;
                setTimeout(() => this.renderCharts(), 100);
            }
        });
    }
    ngOnDestroy() {
        this.sub?.unsubscribe();
        this.charts.forEach(c => c.destroy());
        this.charts = [];
    }
    renderCharts() {
        if (!this.metrics)
            return;
        this.destroyCharts();
        const routes = this.metrics.popularRoutes || [];
        const routeCtx = document.getElementById('routesChart');
        if (routeCtx && routes.length) {
            this.charts.push(new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(routeCtx, {
                type: 'bar',
                data: {
                    labels: routes.map((r) => r.route),
                    datasets: [{ label: 'Bookings', data: routes.map((r) => r.bookings), backgroundColor: '#0d6efd' }]
                },
                options: { responsive: true, plugins: { legend: { display: false } } }
            }));
        }
        const trend = this.metrics.cancellationTrend || {};
        const trendCtx = document.getElementById('cancelChart');
        const labels = Object.keys(trend);
        if (trendCtx && labels.length) {
            this.charts.push(new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(trendCtx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [{ label: 'Cancellations', data: labels.map(k => trend[k]), borderColor: '#dc3545', fill: false }]
                },
                options: { responsive: true }
            }));
        }
        const occ = this.metrics.flightOccupancy || [];
        const occCtx = document.getElementById('occupancyChart');
        if (occCtx && occ.length) {
            this.charts.push(new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(occCtx, {
                type: 'doughnut',
                data: {
                    labels: occ.map((o) => o.flight),
                    datasets: [{ data: occ.map((o) => o.occupancyRate), backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1'] }]
                },
                options: { responsive: true }
            }));
        }
    }
    destroyCharts() {
        this.charts.forEach(c => c.destroy());
        this.charts = [];
    }
    static { this.ɵfac = function AdminAnalyticsComponent_Factory(t) { return new (t || AdminAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminAnalyticsComponent, selectors: [["app-admin-analytics"]], decls: 1, vars: 1, consts: [["class", "container mt-4", 4, "ngIf"], [1, "container", "mt-4"], [1, "row", "g-3", "mb-4"], [1, "col-md-3"], [1, "card", "p-3", "text-center"], [1, "text-muted"], [1, "row", "g-4"], [1, "col-md-6"], ["id", "routesChart"], ["id", "cancelChart"], ["id", "occupancyChart"]], template: function AdminAnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminAnalyticsComponent_div_0_Template, 37, 10, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metrics);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], styles: ["canvas[_ngcontent-%COMP%] {\n  max-height: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFuYWx5dGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGlCQUFBO0FBRVQiLCJmaWxlIjoiYWRtaW4tYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHsgbWF4LWhlaWdodDogMjgwcHg7IH1cbiJdfQ== */"] }); }
}


/***/ }),

/***/ 7787:
/*!******************************************************************!*\
  !*** ./src/app/component/assign-pilot/assign-pilot.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignPilotComponent": () => (/* binding */ AssignPilotComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function AssignPilotComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.responseMessage || "Operation successful!");
} }
function AssignPilotComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
function AssignPilotComponent_div_5_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", f_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", f_r6.flight_number, " \u2013 ", f_r6.source, " \u2192 ", f_r6.destination, "");
} }
function AssignPilotComponent_div_5_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r7.username);
} }
function AssignPilotComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Assign Pilot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AssignPilotComponent_div_5_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 16)(9, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Select flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AssignPilotComponent_div_5_option_11_Template, 2, 4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 14)(13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Pilot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 19)(16, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Select pilot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AssignPilotComponent_div_5_option_18_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 20)(20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20)(24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Assign Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 22)(27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "CONFIRMED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Assign Pilot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.assignForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.flights);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.pilots);
} }
function AssignPilotComponent_tr_31_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssignPilotComponent_tr_31_ng_container_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const s_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.updateStatus(s_r10.id, "ACCEPTED")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssignPilotComponent_tr_31_ng_container_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const s_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.updateStatus(s_r10.id, "REJECTED")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AssignPilotComponent_tr_31_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AssignPilotComponent_tr_31_ng_container_19_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const s_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.updateStatus(s_r10.id, $event.target.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "CONFIRMED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AssignPilotComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AssignPilotComponent_tr_31_ng_container_18_Template, 5, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AssignPilotComponent_tr_31_ng_container_19_Template, 8, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("table-warning", s_r10.assignStatus === "ASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.pilot == null ? null : s_r10.pilot.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.flight == null ? null : s_r10.flight.flight_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.flight == null ? null : s_r10.flight.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.flight == null ? null : s_r10.flight.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.flight == null ? null : s_r10.flight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.scheduledDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.roleName === "PILOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.roleName === "ADMIN");
} }
class AssignPilotComponent {
    constructor(fb, httpService, authService) {
        this.fb = fb;
        this.httpService = httpService;
        this.authService = authService;
        this.flights = [];
        this.pilots = [];
        this.schedules = [];
        this.roleName = '';
        this.showMessage = false;
        this.showError = false;
        this.responseMessage = '';
        this.errorMessage = '';
    }
    ngOnInit() {
        this.roleName = this.authService.getRole;
        this.assignForm = this.fb.group({
            flightId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            pilotId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            scheduledDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            assignStatus: ['ASSIGNED', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.httpService.getAllFlights().subscribe({ next: (data) => this.flights = data });
        this.httpService.getPilots().subscribe({ next: (data) => this.pilots = data });
        if (this.roleName === 'ADMIN') {
            this.httpService.getAllSchedules().subscribe({ next: (data) => this.schedules = data });
        }
        else {
            this.httpService.getMySchedule().subscribe({ next: (data) => this.schedules = data });
        }
    }
    onSubmit() {
        if (this.assignForm.invalid)
            return;
        const { flightId, pilotId, scheduledDate, assignStatus } = this.assignForm.value;
        this.httpService.assignPilot(flightId, pilotId, scheduledDate, assignStatus).subscribe({
            next: () => {
                this.showMessage = true;
                this.showError = false;
                this.responseMessage = 'Pilot assigned successfully!';
                this.httpService.getAllSchedules().subscribe({ next: (data) => this.schedules = data });
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Assignment failed.';
            }
        });
    }
    updateStatus(id, status) {
        this.httpService.updateScheduleStatus(id, status).subscribe({
            next: () => {
                this.showMessage = true;
                this.showError = false;
                if (this.roleName === 'ADMIN') {
                    this.httpService.getAllSchedules().subscribe({ next: (data) => this.schedules = data });
                }
                else {
                    this.httpService.getMySchedule().subscribe({ next: (data) => this.schedules = data });
                }
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Failed to update status.';
            }
        });
    }
    static { this.ɵfac = function AssignPilotComponent_Factory(t) { return new (t || AssignPilotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AssignPilotComponent, selectors: [["app-assign-pilot"]], decls: 32, vars: 5, consts: [[1, "container"], [1, "mb-3"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "card p-3 mb-4", 4, "ngIf"], [1, "card", "p-3"], [1, "table", "table-hover"], [1, "table-dark"], [3, "table-warning", 4, "ngFor", "ngForOf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "card", "p-3", "mb-4"], [3, "formGroup", "ngSubmit"], [1, "row", "g-2"], [1, "col-md-4"], [1, "form-label"], ["formControlName", "flightId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "pilotId", 1, "form-select"], [1, "col-md-3"], ["type", "date", "formControlName", "scheduledDate", 1, "form-control"], ["formControlName", "assignStatus", 1, "form-select"], ["value", "ASSIGNED"], ["value", "CONFIRMED"], ["type", "submit", 1, "btn", "btn-primary", "mt-3"], [3, "value"], [4, "ngIf"], [1, "btn", "btn-sm", "btn-success", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "form-select", "form-select-sm", "d-inline", "w-auto", 3, "change"], ["value", "PENDING"], ["value", "COMPLETED"]], template: function AssignPilotComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AssignPilotComponent_div_3_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AssignPilotComponent_div_4_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AssignPilotComponent_div_5_Template, 33, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Schedule Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "table", 6)(10, "thead", 7)(11, "tr")(12, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sr#");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Pilot");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Flight No");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Source");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Departure");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Scheduled Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AssignPilotComponent_tr_31_Template, 20, 12, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.roleName === "ADMIN" ? "Assign Pilot to Flight" : "My Schedule");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.roleName === "ADMIN");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schedules);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["@charset \"UTF-8\";\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%]:first-of-type {\n  border-top: 3px solid var(--ai-primary) !important;\n}\n.card[_ngcontent-%COMP%]:first-of-type   h6[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDC68\u200D\u2708\uFE0F \";\n}\n.btn-primary[type=submit][_ngcontent-%COMP%] {\n  min-width: 150px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n.card[_ngcontent-%COMP%]:last-of-type   h6[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCC5 \";\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 600;\n  color: var(--ai-text);\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  font-weight: 700;\n  color: var(--ai-primary);\n  letter-spacing: 0.04em;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--ai-text-secondary);\n}\n.form-select.form-select-sm.d-inline.w-auto[_ngcontent-%COMP%] {\n  min-width: 110px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-success.btn-sm[_ngcontent-%COMP%] {\n  min-width: 68px;\n}\n.btn-danger.btn-sm[_ngcontent-%COMP%] {\n  min-width: 60px;\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi1waWxvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFJaEI7RUFBSyxxQkFBQTtBQURMO0FBSUE7RUFDRSxrREFBQTtBQURGO0FBR0U7RUFBYSxpQkFBQTtBQUFmO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQU1FO0VBQWEsY0FBQTtBQUZmO0FBTUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBSEY7QUFPQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUpGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FBTEY7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5GO0FBVUE7RUFBc0IsZUFBQTtBQU50QjtBQU9BO0VBQXNCLGVBQUE7QUFIdEI7QUFLQTtFQUNFO0lBQVMsY0FBQTtJQUFnQixnQkFBQTtJQUFrQixtQkFBQTtFQUMzQztBQUNGIiwiZmlsZSI6ImFzc2lnbi1waWxvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQVNTSUdOIFBJTE9UIChBZG1pbikgLyBNWSBTQ0hFRFVMRSAoUGlsb3QpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaDMgeyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cblxuLy8gQXNzaWduIGZvcm0gY2FyZFxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1haS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuXG4gIGg2OjpiZWZvcmUgeyBjb250ZW50OiAn8J+RqOKAjeKciO+4jyAnOyB9XG59XG5cbi8vIFN1Ym1pdCBidXR0b25cbi5idG4tcHJpbWFyeVt0eXBlPVwic3VibWl0XCJdIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLy8gU2NoZWR1bGUgdGFibGUgY2FyZFxuLmNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgaDY6OmJlZm9yZSB7IGNvbnRlbnQ6ICfwn5OFICc7IH1cbn1cblxuLy8gUGlsb3QgbmFtZSBib2xkXG4udGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWFpLXRleHQpO1xufVxuXG4vLyBGbGlnaHQgbnVtYmVyXG4udGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFpLXByaW1hcnkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4vLyBTdGF0dXMgY29sdW1uIOKAlCB1c2UgdGV4dCBjb2xvciB0byBpbmRpY2F0ZSBzdGF0ZVxuLnRhYmxlIHRkOm50aC1jaGlsZCg4KSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWFpLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLy8gSW5saW5lIHN0YXR1cyBzZWxlY3QgKGFkbWluKVxuLmZvcm0tc2VsZWN0LmZvcm0tc2VsZWN0LXNtLmQtaW5saW5lLnctYXV0byB7XG4gIG1pbi13aWR0aDogMTEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vLyBQaWxvdCBhY3Rpb24gYnV0dG9uc1xuLmJ0bi1zdWNjZXNzLmJ0bi1zbSB7IG1pbi13aWR0aDogNjhweDsgfVxuLmJ0bi1kYW5nZXIuYnRuLXNtICB7IG1pbi13aWR0aDogNjBweDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRhYmxlIHsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93LXg6IGF1dG87IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbn0iXX0= */"] }); }
}


/***/ }),

/***/ 2641:
/*!**********************************************************!*\
  !*** ./src/app/component/bookings/bookings.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsComponent": () => (/* binding */ BookingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function BookingsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.responseMessage);
} }
function BookingsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
function BookingsComponent_tr_36_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingsComponent_tr_36_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.cancelBooking(b_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BookingsComponent_tr_36_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingsComponent_tr_36_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.retryPayment(b_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Retry Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BookingsComponent_tr_36_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingsComponent_tr_36_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.downloadTicket(b_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BookingsComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td")(20, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td")(23, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, BookingsComponent_tr_36_button_26_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BookingsComponent_tr_36_button_27_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, BookingsComponent_tr_36_button_28_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const b_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.pnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.flight == null ? null : b_r3.flight.flight_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.seatNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.flight == null ? null : b_r3.flight.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.flight == null ? null : b_r3.flight.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.flight == null ? null : b_r3.flight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.flight == null ? null : b_r3.flight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", b_r3.flight == null ? null : b_r3.flight.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-success", b_r3.status === "CONFIRMED")("bg-danger", b_r3.status === "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", b_r3.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3.paymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", b_r3.status !== "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", b_r3.paymentStatus === "FAILED" || b_r3.paymentStatus === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", b_r3.paymentStatus === "SUCCESS");
} }
class BookingsComponent {
    constructor(httpService, authService, bookingFlow, router) {
        this.httpService = httpService;
        this.authService = authService;
        this.bookingFlow = bookingFlow;
        this.router = router;
        this.bookings = [];
        this.showMessage = false;
        this.showError = false;
        this.responseMessage = '';
        this.errorMessage = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        this.loadBookings();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    loadBookings() {
        this.subs.add(this.httpService.getMyBookings().subscribe({
            next: (data) => {
                this.bookings = data;
                this.showError = false;
            },
            error: () => {
                this.showError = true;
                this.errorMessage = 'Failed to load bookings.';
            }
        }));
    }
    cancelBooking(id) {
        this.subs.add(this.httpService.updateBookingStatus(id, 'CANCELLED').subscribe({
            next: () => {
                this.showMessage = true;
                this.responseMessage = 'Booking cancelled successfully.';
                this.loadBookings();
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Failed to cancel booking.';
            }
        }));
    }
    retryPayment(bookingId) {
        this.bookingFlow.pendingBookingId = bookingId;
        this.router.navigate(['/payment'], { queryParams: { bookingId } });
    }
    downloadTicket(id) {
        this.subs.add(this.httpService.downloadTicket(id).subscribe({
            next: (blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'ticket.pdf';
                a.click();
                window.URL.revokeObjectURL(url);
            },
            error: () => {
                this.showError = true;
                this.errorMessage = 'Failed to download ticket. Payment must be successful.';
            }
        }));
    }
    static { this.ɵfac = function BookingsComponent_Factory(t) { return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_2__.BookingFlowService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BookingsComponent, selectors: [["app-bookings"]], decls: 37, vars: 3, consts: [[1, "container"], [1, "mb-3"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card", "p-3"], [1, "table", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "badge"], [1, "badge", "bg-info", "text-dark"], ["class", "btn btn-sm btn-warning me-1", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-primary me-1", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-warning", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-primary", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", 3, "click"]], template: function BookingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "My Bookings");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BookingsComponent_div_3_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BookingsComponent_div_4_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Booking Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "table", 5)(9, "thead", 6)(10, "tr")(11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Sr#");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "PNR");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Flight No");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Seats");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Source");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Departure");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Arrival");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Payment");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, BookingsComponent_tr_36_Template, 29, 18, "tr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bookings);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["@charset \"UTF-8\";\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]::before {\n  content: \"\uD83C\uDFAB\";\n  font-size: 0.9rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-family: \"Fira Code\", \"Consolas\", monospace;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: var(--ai-primary);\n  letter-spacing: 0.08em;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  font-weight: 700;\n  color: var(--ai-text);\n  letter-spacing: 0.04em;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(9) {\n  font-weight: 700;\n  color: var(--ai-success);\n  font-size: 0.9rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  white-space: nowrap;\n  min-width: 140px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  min-width: 75px;\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUFLLHFCQUFBO0FBREw7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBRE47QUFPQTtFQUNFLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFKRjtBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBTEY7QUFTQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQU5GO0FBVUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFTRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQVBKO0FBV0E7RUFDRTtJQUFTLGNBQUE7SUFBZ0IsZ0JBQUE7SUFBa0IsbUJBQUE7RUFMM0M7QUFDRiIsImZpbGUiOiJib29raW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTVkgQk9PS0lOR1Mg4oCUIFByZW1pdW0gcGFzc2VuZ2VyIGJvb2tpbmcgdGFibGVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5oMyB7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuXG4vLyBDYXJkIGNvbnRhaW5lclxuLmNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGg2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ/CfjqsnO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIFBOUiDigJQgc3R5bGVkIGFzIGEgY29kZVxuLnRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBDb2RlJywgJ0NvbnNvbGFzJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFpLXByaW1hcnkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xufVxuXG4vLyBGbGlnaHQgbnVtYmVyXG4udGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFpLXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4vLyBQcmljZSBjb2x1bW5cbi50YWJsZSB0ZDpudGgtY2hpbGQoOSkge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tYWktc3VjY2Vzcyk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vLyBBY3Rpb24gY29sdW1uIGJ1dHRvbnMg4oCUIHN0YWNrZWQgb24gc21hbGwgc2NyZWVuc1xuLnRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDE0MHB4O1xuXG4gIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgbWluLXdpZHRoOiA3NXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGFibGUgeyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3cteDogYXV0bzsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxufSJdfQ== */"] }); }
}


/***/ }),

/***/ 6398:
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "a", 9)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Revenue & booking charts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "a", 11)(12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u2708\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Manage Flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Add & update routes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "a", 12)(20, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "All Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "View passenger bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "a", 13)(28, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\uD83D\uDC68\u200D\u2708\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Assign Pilots");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Schedule crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} }
function DashboardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 14)(3, "a", 15)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Search Flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Find your next journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14)(11, "a", 16)(12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\uD83C\uDFAB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "View & manage tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "a", 17)(20, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Account settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} }
function DashboardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 18)(3, "a", 19)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "My Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "View assigned flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18)(11, "a", 17)(12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Account settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} }
class DashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    get role() {
        return this.authService.getRole;
    }
    static { this.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 13, vars: 4, consts: [[1, "page-enter", "container", "py-4"], [1, "dashboard-hero", "card-hover"], [1, "tagline", "mb-1"], [1, "section-title"], [1, "text-muted"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [1, "row", "g-3"], [1, "col-md-3"], ["routerLink", "/admin/analytics", 1, "dash-card", "card-hover"], [1, "dash-icon"], ["routerLink", "/add_flights", 1, "dash-card", "card-hover"], ["routerLink", "/view_all_user", 1, "dash-card", "card-hover"], ["routerLink", "/assign_pilot", 1, "dash-card", "card-hover"], [1, "col-md-4"], ["routerLink", "/search_flight", 1, "dash-card", "card-hover"], ["routerLink", "/my_booking", 1, "dash-card", "card-hover"], ["routerLink", "/my_profile", 1, "dash-card", "card-hover"], [1, "col-md-6"], ["routerLink", "/pilot-schedule", 1, "dash-card", "card-hover"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Connecting Bharat to the World");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome to Bharat Airlines");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Signed in as ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 34, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_div_11_Template, 26, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 18, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.role);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "ADMIN");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "PASSENGER");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "PILOT");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".dashboard-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--bharat-blue), #0d5a8a);\n  color: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 2rem;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--bharat-white);\n}\n.dashboard-hero[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85) !important;\n}\n.dash-card[_ngcontent-%COMP%] {\n  display: block;\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1.5rem;\n  text-decoration: none;\n  color: inherit;\n  height: 100%;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  border-top: 3px solid var(--bharat-saffron);\n}\n.dash-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--bharat-blue);\n  margin: 0.5rem 0;\n}\n.dash-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bharat-muted);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.dash-card[_ngcontent-%COMP%]   .dash-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdFQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsMEJBQUE7QUFDSjtBQUVFO0VBQ0UsMkNBQUE7QUFBSjtBQUlBO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7QUFERjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0FBSEoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1oZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmhhcmF0LWJsdWUpLCAjMGQ1YThhKTtcbiAgY29sb3I6IHZhcigtLWJoYXJhdC13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJoYXJhdC1yYWRpdXMpO1xuICBwYWRkaW5nOiAycmVtO1xuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgfVxuXG4gIC50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5kYXNoLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmhhcmF0LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iaGFyYXQtc2FmZnJvbik7XG5cbiAgaDUge1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtYmx1ZSk7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5kYXNoLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuIl19 */"] }); }
}


/***/ }),

/***/ 1170:
/*!********************************************************************!*\
  !*** ./src/app/component/flight-search/flight-search.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightSearchComponent": () => (/* binding */ FlightSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function FlightSearchComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "option", 26);
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", s_r4);
} }
function FlightSearchComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "option", 26);
} if (rf & 2) {
    const d_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", d_r5);
} }
function FlightSearchComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
function FlightSearchComponent_div_45_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 33)(11, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FlightSearchComponent_div_45_div_3_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const f_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.selectFlight(f_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Select Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const f_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r7.flight_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r7.source, " \u2192 ", f_r7.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r7.departureTime, " \u2013 ", f_r7.arrivalTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", f_r7.price, "");
} }
function FlightSearchComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Available Flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FlightSearchComponent_div_45_div_3_Template, 15, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.flights);
} }
class FlightSearchComponent {
    constructor(fb, httpService, bookingFlow, router) {
        this.fb = fb;
        this.httpService = httpService;
        this.bookingFlow = bookingFlow;
        this.router = router;
        this.flights = [];
        this.sourceList = [];
        this.destinationList = [];
        this.dropdownOpen = false;
        this.showError = false;
        this.errorMessage = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    ngOnInit() {
        this.searchForm = this.fb.group({
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            adult: [1],
            child: [0],
            infant: [0],
            travelClass: ['Economy']
        });
        this.filterForm = this.fb.group({
            minPrice: [''],
            maxPrice: [''],
            sortBy: ['price']
        });
        this.subs.add(this.httpService.suggestSource().subscribe({
            next: (data) => { this.sourceList = [...new Set(data.map(f => f.source))]; }
        }));
        this.subs.add(this.httpService.suggestDestination().subscribe({
            next: (data) => { this.destinationList = [...new Set(data.map(f => f.destination))]; }
        }));
        if (this.bookingFlow.searchParams) {
            this.searchForm.patchValue(this.bookingFlow.searchParams);
            this.search();
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }
    updateTravelerCount(type, delta) {
        const ctrl = this.searchForm.get(type);
        if (ctrl) {
            const newVal = (ctrl.value || 0) + delta;
            if (newVal >= 0)
                ctrl.setValue(newVal);
        }
    }
    get travelerSummary() {
        const a = this.searchForm.get('adult')?.value || 0;
        const c = this.searchForm.get('child')?.value || 0;
        const i = this.searchForm.get('infant')?.value || 0;
        const cls = this.searchForm.get('travelClass')?.value;
        return `${a} Adult${a !== 1 ? 's' : ''}${c ? ', ' + c + ' Child' : ''}${i ? ', ' + i + ' Infant' : ''} - ${cls}`;
    }
    search() {
        if (this.searchForm.invalid)
            return;
        const { source, destination, date } = this.searchForm.value;
        const f = this.filterForm.value;
        const filters = { sortBy: f.sortBy || 'price' };
        if (f.minPrice)
            filters.minPrice = Number(f.minPrice);
        if (f.maxPrice)
            filters.maxPrice = Number(f.maxPrice);
        this.subs.add(this.httpService.searchFlights(source, destination, date, filters).subscribe({
            next: (data) => {
                this.flights = data;
                this.showError = false;
            },
            error: () => {
                this.showError = true;
                this.errorMessage = 'Search failed.';
            }
        }));
    }
    selectFlight(flight) {
        const adult = this.searchForm.get('adult')?.value || 1;
        const child = this.searchForm.get('child')?.value || 0;
        const infant = this.searchForm.get('infant')?.value || 0;
        const totalPrice = adult * flight.price + child * flight.price * 0.75 + infant * flight.price * 0.5;
        this.bookingFlow.setFlight(flight, totalPrice);
        this.bookingFlow.setSearchParams(this.searchForm.value);
        this.router.navigate(['/seat-selection', flight.id]);
    }
    static { this.ɵfac = function FlightSearchComponent_Factory(t) { return new (t || FlightSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__.BookingFlowService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FlightSearchComponent, selectors: [["app-flight-search"]], decls: 46, vars: 6, consts: [[1, "page-enter", "container", "py-3"], [1, "section-title"], [1, "tagline"], [1, "card", "p-3", "mb-4", "card-hover"], [3, "formGroup", "ngSubmit"], [1, "row", "g-2", "align-items-end"], [1, "col-md-3"], [1, "form-label"], ["formControlName", "source", "list", "sourceList", "placeholder", "Departure", 1, "form-control"], ["id", "sourceList"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "destination", "list", "destList", "placeholder", "Destination", 1, "form-control"], ["id", "destList"], [1, "col-md-2"], ["type", "date", "formControlName", "date", 1, "form-control"], ["type", "number", "formControlName", "adult", "min", "1", 1, "form-control"], ["type", "submit", 1, "btn-bharat-primary", "w-100"], [1, "row", "g-2", "mt-2", "align-items-end", 3, "formGroup"], ["type", "number", "formControlName", "minPrice", "placeholder", "Min price", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "maxPrice", "placeholder", "Max price", 1, "form-control", "form-control-sm"], ["formControlName", "sortBy", 1, "form-select", "form-select-sm"], ["value", "price"], ["value", "price_desc"], ["value", "duration"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "flight-results", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "flight-results"], ["class", "flight-card card-hover mb-3", 4, "ngFor", "ngForOf"], [1, "flight-card", "card-hover", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2"], [1, "text-muted", "ms-2"], [1, "d-flex", "align-items-center", "gap-3"], [1, "price-tag"], [1, "btn-bharat-saffron", "btn-sm", 3, "click"]], template: function FlightSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search Flights");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Bharat Airlines");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FlightSearchComponent_Template_form_ngSubmit_6_listener() { return ctx.search(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "From");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "datalist", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FlightSearchComponent_option_13_Template, 1, 1, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "To");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "datalist", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, FlightSearchComponent_option_19_Template, 1, 1, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13)(25, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Travellers");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13)(29, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "form", 17)(32, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6)(37, "select", 20)(38, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Price (low)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Price (high)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Duration");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, FlightSearchComponent_div_44_Template, 2, 1, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, FlightSearchComponent_div_45_Template, 4, 1, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sourceList);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.destinationList);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.filterForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flights.length > 0);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: [".flight-card[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1rem 1.25rem;\n  border-left: 4px solid var(--bharat-blue);\n}\n\n.price-tag[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--bharat-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWdodC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiZmxpZ2h0LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlnaHQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJoYXJhdC13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJoYXJhdC1yYWRpdXMpO1xuICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tYmhhcmF0LWJsdWUpO1xufVxuXG4ucHJpY2UtdGFnIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tYmhhcmF0LWJsdWUpO1xufVxuIl19 */"] }); }
}


/***/ }),

/***/ 8165:
/*!******************************************************!*\
  !*** ./src/app/component/flight/flight.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightComponent": () => (/* binding */ FlightComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function FlightComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Flight created successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FlightComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errorMessage || "An error occurred.");
} }
function FlightComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FlightComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 42)(10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "XL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 42)(23, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FlightComponent_div_67_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r6 = restoredCtx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.removeSeat(i_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r6);
} }
function FlightComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const f_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.flight_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.flight_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", f_r9.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r9.status);
} }
class FlightComponent {
    constructor(fb, httpService, authService) {
        this.fb = fb;
        this.httpService = httpService;
        this.authService = authService;
        this.flights = [];
        this.showMessage = false;
        this.showError = false;
        this.errorMessage = '';
        this.today = new Date().toISOString().split('T')[0];
    }
    ngOnInit() {
        this.flightForm = this.fb.group({
            flight_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            flight_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            departureDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            departureTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            arrivalTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            totalSeats: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
            available_seats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0.01)]],
            status: ['SCHEDULED', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            seats: this.fb.array([])
        });
        this.addSeat();
        this.loadFlights();
    }
    get seats() {
        return this.flightForm.get('seats');
    }
    addSeat() {
        const seatGroup = this.fb.group({
            seatNumber: [''],
            rowLabel: [''],
            columnNumber: [1],
            price: [0],
            isAvailable: [true],
            isXL: [false],
            isBlocked: [false],
            isEmergencyExist: [false]
        });
        this.seats.push(seatGroup);
    }
    removeSeat(index) {
        this.seats.removeAt(index);
    }
    loadFlights() {
        this.httpService.getAllFlights().subscribe({
            next: (data) => { this.flights = data; },
            error: () => { this.showError = true; }
        });
    }
    onSubmit() {
        if (this.flightForm.invalid)
            return;
        this.httpService.createFlight(this.flightForm.value).subscribe({
            next: () => {
                this.showMessage = true;
                this.showError = false;
                this.flightForm.reset();
                this.seats.clear();
                this.addSeat();
                this.loadFlights();
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Failed to create flight.';
            }
        });
    }
    static { this.ɵfac = function FlightComponent_Factory(t) { return new (t || FlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FlightComponent, selectors: [["app-flight"]], decls: 96, vars: 7, consts: [[1, "container"], [1, "mb-3"], [1, "card", "p-3", "mb-4"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "g-2"], [1, "col-md-4"], [1, "form-label"], ["formControlName", "flight_number", "placeholder", "Flight number", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["formControlName", "flight_name", "placeholder", "Flight name", 1, "form-control"], ["formControlName", "source", "placeholder", "source", 1, "form-control"], ["formControlName", "destination", "placeholder", "destination", 1, "form-control"], ["type", "date", "formControlName", "departureDate", 1, "form-control", 3, "min"], ["type", "time", "formControlName", "departureTime", 1, "form-control"], ["type", "time", "formControlName", "arrivalTime", 1, "form-control"], ["type", "number", "formControlName", "totalSeats", 1, "form-control"], ["type", "number", "formControlName", "available_seats", 1, "form-control"], ["type", "number", "formControlName", "price", 1, "form-control"], ["formControlName", "status", 1, "form-select"], ["value", "SCHEDULED"], ["value", "DELAYED"], ["value", "CANCELLED"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "mb-2", 3, "click"], ["formArrayName", "seats"], ["class", "row g-2 align-items-center mb-2 border rounded p-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "mt-2"], [1, "card", "p-3"], [1, "table", "table-sm", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "text-danger", "small"], [1, "row", "g-2", "align-items-center", "mb-2", "border", "rounded", "p-2", 3, "formGroupName"], [1, "col-md-2"], ["formControlName", "seatNumber", "placeholder", "Seat No", 1, "form-control", "form-control-sm"], ["formControlName", "rowLabel", "placeholder", "Row", 1, "form-control", "form-control-sm"], [1, "col-md-1"], ["type", "number", "formControlName", "columnNumber", "placeholder", "Col", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "price", "placeholder", "Price", 1, "form-control", "form-control-sm"], [1, "col-auto"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "formControlName", "isAvailable", 1, "form-check-input"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "isXL", 1, "form-check-input"], ["type", "checkbox", "formControlName", "isBlocked", 1, "form-check-input"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function FlightComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Manage Flights");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add New Flight");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FlightComponent_div_6_Template, 2, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FlightComponent_div_7_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FlightComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Flight Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FlightComponent_div_14_Template, 2, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Flight Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Source");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7)(24, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7)(28, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Departure Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7)(32, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Departure Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 7)(36, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Arrival Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 7)(40, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Total Seats");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7)(44, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Available Seats");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 7)(48, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Price (\u20B9)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7)(52, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "select", 20)(55, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "SCHEDULED");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "option", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "DELAYED");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "CANCELLED");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Seat Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FlightComponent_Template_button_click_64_listener() { return ctx.addSeat(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "+ Add Seat");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, FlightComponent_div_67_Template, 25, 1, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Create Flight");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 28)(71, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Flight Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "table", 29)(74, "thead", 30)(75, "tr")(76, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Sr#");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Flight No");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Source");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Departure");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Arrival");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, FlightComponent_tr_95_Template, 19, 9, "tr", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            let tmp_3_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.flightForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.flightForm.get("flight_number")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.flightForm.get("flight_number")) == null ? null : tmp_3_0.touched));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx.today);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.seats.controls);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.flights);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName], styles: ["@charset \"UTF-8\";\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%]:first-of-type {\n  border-top: 3px solid var(--ai-primary) !important;\n}\n.card[_ngcontent-%COMP%]:first-of-type   h5[_ngcontent-%COMP%]::before {\n  content: \"\u2708 \";\n}\ndiv[formarrayname=seats][_ngcontent-%COMP%]   .row.border[_ngcontent-%COMP%] {\n  background: var(--ai-surface-warm);\n  border-color: var(--ai-border) !important;\n  border-radius: var(--ai-r-sm) !important;\n  transition: box-shadow 0.14s ease;\n}\ndiv[formarrayname=seats][_ngcontent-%COMP%]   .row.border[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--ai-shadow-sm);\n}\n.btn-outline-primary.btn-sm[_ngcontent-%COMP%] {\n  border-style: dashed;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\nbutton.btn-success[type=submit][_ngcontent-%COMP%] {\n  min-width: 160px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  padding: 0.55rem 1.5rem;\n}\n.card[_ngcontent-%COMP%]:last-of-type   h5[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCCB \";\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ai-text-secondary);\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 700;\n  color: var(--ai-primary);\n  letter-spacing: 0.04em;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  font-weight: 700;\n  color: var(--ai-success);\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFJaEI7RUFBSyxxQkFBQTtBQURMO0FBSUE7RUFDRSxrREFBQTtBQURGO0FBR0U7RUFBYSxhQUFBO0FBQWY7QUFLRTtFQUNFLGtDQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0FBRko7QUFJSTtFQUNFLCtCQUFBO0FBRk47QUFRQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUxGO0FBU0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5GO0FBV0U7RUFBYSxjQUFBO0FBUGY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFSRjtBQVlBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBVEY7QUFhQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFWRjtBQWFBO0VBQ0U7SUFBUyxjQUFBO0lBQWdCLGdCQUFBO0lBQWtCLG1CQUFBO0VBUDNDO0FBQ0YiLCJmaWxlIjoiZmxpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNQU5BR0UgRkxJR0hUUyAoQWRtaW4pIOKAlCBBZGQtZmxpZ2h0IGZvcm0gKyBmbGlnaHQgbGlzdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmgzIHsgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XG5cbi8vIC0tLS0gQWRkIGZsaWdodCBmb3JtIGNhcmQgLS0tLVxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1haS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuXG4gIGg1OjpiZWZvcmUgeyBjb250ZW50OiAn4pyIICc7IH1cbn1cblxuLy8gU2VhdCBGb3JtQXJyYXkgcm93c1xuZGl2W2Zvcm1hcnJheW5hbWU9XCJzZWF0c1wiXSB7XG4gIC5yb3cuYm9yZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1haS1zdXJmYWNlLXdhcm0pO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWktYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFpLXItc20pICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE0cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1haS1zaGFkb3ctc20pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBcIkFkZCBTZWF0XCIgYnV0dG9uXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5idG4tc20ge1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLy8gXCJDcmVhdGUgRmxpZ2h0XCIgQ1RBXG5idXR0b24uYnRuLXN1Y2Nlc3NbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIHBhZGRpbmc6IDAuNTVyZW0gMS41cmVtO1xufVxuXG4vLyAtLS0tIEZsaWdodCBsaXN0IGNhcmQgLS0tLVxuLmNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgaDU6OmJlZm9yZSB7IGNvbnRlbnQ6ICfwn5OLICc7IH1cbn1cblxuLy8gU3RhdHVzIGJhZGdlcyBpbiB0YWJsZSDigJQgbWFwIHRleHQgdG8gYmFkZ2UtbGlrZSBzcGFuc1xuLnRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1haS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi8vIEZsaWdodCBudW1iZXIgY29sdW1uXG4udGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFpLXByaW1hcnkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4vLyBQcmljZSBjb2x1bW5cbi50YWJsZSB0ZDpudGgtY2hpbGQoOCkge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tYWktc3VjY2Vzcyk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGFibGUgeyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3cteDogYXV0bzsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxufSJdfQ== */"] }); }
}


/***/ }),

/***/ 5409:
/*!********************************************************!*\
  !*** ./src/app/component/landing/landing.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LandingComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LandingComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LandingComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LandingComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r5.desc);
} }
function LandingComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_51_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const d_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r7.searchForm.patchValue({ destination: d_r6.city }); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onSearch()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const d_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r6.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r6.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r6.code);
} }
class LandingComponent {
    constructor(fb, router, authService, bookingFlow) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.bookingFlow = bookingFlow;
        this.destinations = [
            { city: 'Delhi', code: 'DEL', img: '🏛️' },
            { city: 'Mumbai', code: 'BOM', img: '🌊' },
            { city: 'Bengaluru', code: 'BLR', img: '🌆' },
            { city: 'Chennai', code: 'MAA', img: '🏖️' },
            { city: 'Kolkata', code: 'CCU', img: '🎭' },
            { city: 'Hyderabad', code: 'HYD', img: '🏰' }
        ];
        this.features = [
            { icon: '✈️', title: 'Wide Network', desc: 'Connect to major cities across India and beyond.' },
            { icon: '🔒', title: 'Secure Booking', desc: 'JWT auth, OTP verification, and encrypted payments.' },
            { icon: '💺', title: 'Easy Seat Selection', desc: 'Interactive seat map with real-time availability.' },
            { icon: '📱', title: '24/7 Support', desc: 'Manage bookings anytime from any device.' }
        ];
    }
    ngOnInit() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.searchForm = this.fb.group({
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            date: [tomorrow.toISOString().split('T')[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            adult: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)],
            child: [0],
            infant: [0]
        });
    }
    onSearch() {
        if (this.searchForm.invalid)
            return;
        this.bookingFlow.setSearchParams(this.searchForm.value);
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/search_flight']);
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: '/search_flight' } });
        }
    }
    static { this.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_1__.BookingFlowService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 60, vars: 6, consts: [[1, "landing", "page-enter"], [1, "landing-nav"], ["routerLink", "/", 1, "brand"], [1, "brand-icon"], [1, "brand-text"], [1, "nav-actions"], ["routerLink", "/login", "class", "nav-link", 4, "ngIf"], ["routerLink", "/register", "class", "btn-bharat-saffron btn-sm", 4, "ngIf"], ["routerLink", "/dashboard", "class", "btn-bharat-primary btn-sm", 4, "ngIf"], [1, "hero"], [1, "hero-content"], [1, "tagline"], [1, "hero-sub"], [1, "hero-search", "card-hover", 3, "formGroup", "ngSubmit"], [1, "row", "g-2"], [1, "col-md-3"], ["formControlName", "source", "placeholder", "Departure city", 1, "form-control"], ["formControlName", "destination", "placeholder", "Destination city", 1, "form-control"], [1, "col-md-2"], ["type", "date", "formControlName", "date", 1, "form-control"], ["type", "number", "formControlName", "adult", "min", "1", "max", "9", 1, "form-control"], [1, "col-md-2", "d-flex", "align-items-end"], ["type", "submit", 1, "btn-bharat-saffron", "w-100"], [1, "features", "section-pad"], [1, "section-title", "text-center", "mb-4"], [1, "row", "g-4"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "destinations", "section-pad"], [1, "row", "g-3"], ["class", "col-md-2 col-6", 4, "ngFor", "ngForOf"], [1, "landing-footer"], [1, "footer-links"], ["routerLink", "/login"], ["routerLink", "/register"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "btn-bharat-saffron", "btn-sm"], ["routerLink", "/dashboard", 1, "btn-bharat-primary", "btn-sm"], [1, "feature-card", "card-hover", "page-enter"], [1, "feature-icon"], [1, "col-md-2", "col-6"], [1, "dest-card", "card-hover", 3, "click"], [1, "dest-emoji"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2)(3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2708");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Bharat Airlines");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LandingComponent_a_8_Template, 2, 0, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LandingComponent_a_9_Template, 2, 0, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LandingComponent_a_10_Template, 2, 0, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "section", 9)(12, "div", 10)(13, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Connecting Bharat to the World");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Fly with Pride,");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Fly with Bharat");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Book domestic and international flights with ease.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LandingComponent_Template_form_ngSubmit_21_listener() { return ctx.onSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "From");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15)(28, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "To");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18)(32, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18)(36, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Travellers");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 21)(40, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Search Flights");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "section", 23)(43, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Why Bharat Airlines?");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, LandingComponent_div_46_Template, 8, 3, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "section", 27)(48, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Popular Destinations");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, LandingComponent_div_51_Template, 8, 3, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "footer", 30)(53, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u00A9 2026 Bharat Airlines \u2014 Connecting Bharat to the World");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 31)(56, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.features);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.destinations);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".landing[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(160deg, var(--bharat-blue) 0%, #0d5a8a 45%, var(--bharat-light) 45%);\n}\n\n.landing-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  color: var(--bharat-white);\n}\n\n.landing-nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--bharat-white);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n.landing-nav[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.landing-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--bharat-white);\n  text-decoration: none;\n}\n\n.hero[_ngcontent-%COMP%] {\n  padding: 3rem 2rem 4rem;\n  color: var(--bharat-white);\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  font-weight: 800;\n  margin: 0.5rem 0;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n\n.hero-search[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1.5rem;\n  color: #333;\n  max-width: 900px;\n  box-shadow: var(--bharat-shadow);\n}\n\n.hero-search[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--bharat-blue);\n}\n\n.section-pad[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n  background: var(--bharat-light);\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1.5rem;\n  text-align: center;\n  height: 100%;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n\n.feature-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--bharat-blue);\n  font-weight: 700;\n}\n\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bharat-muted);\n  font-size: 0.9rem;\n  margin: 0;\n}\n\n.dest-card[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1rem;\n  text-align: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n\n.dest-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--bharat-saffron);\n}\n\n.dest-card[_ngcontent-%COMP%]   .dest-emoji[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  display: block;\n}\n\n.dest-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--bharat-blue);\n}\n\n.dest-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--bharat-muted);\n}\n\n.landing-footer[_ngcontent-%COMP%] {\n  background: var(--bharat-blue);\n  color: var(--bharat-white);\n  padding: 2rem;\n  text-align: center;\n}\n\n.landing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.landing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--bharat-saffron);\n  margin: 0 0.75rem;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdHQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUFIRjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBUUE7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBTEY7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFMSjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUFORjs7QUFTQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFORjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFOSjs7QUFTRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBUko7O0FBWUE7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBVEY7O0FBV0U7RUFDRSxtQ0FBQTtBQVRKOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBVko7O0FBYUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFYSjs7QUFjRTtFQUNFLDBCQUFBO0FBWko7O0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWVFO0VBQ0Usa0JBQUE7QUFiSjs7QUFlSTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQWJOIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1iaGFyYXQtYmx1ZSkgMCUsICMwZDVhOGEgNDUlLCB2YXIoLS1iaGFyYXQtbGlnaHQpIDQ1JSk7XG59XG5cbi5sYW5kaW5nLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBjb2xvcjogdmFyKC0tYmhhcmF0LXdoaXRlKTtcblxuICAuYnJhbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAuYnJhbmQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAubmF2LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubmF2LWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtd2hpdGUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uaGVybyB7XG4gIHBhZGRpbmc6IDNyZW0gMnJlbSA0cmVtO1xuICBjb2xvcjogdmFyKC0tYmhhcmF0LXdoaXRlKTtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuXG4gIC5oZXJvLXN1YiB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cblxuLmhlcm8tc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmhhcmF0LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJoYXJhdC1zaGFkb3cpO1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtYmx1ZSk7XG4gIH1cbn1cblxuLnNlY3Rpb24tcGFkIHtcbiAgcGFkZGluZzogM3JlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iaGFyYXQtbGlnaHQpO1xufVxuXG4uZmVhdHVyZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmhhcmF0LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICAuZmVhdHVyZS1pY29uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBjb2xvcjogdmFyKC0tYmhhcmF0LWJsdWUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tYmhhcmF0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmRlc3QtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJoYXJhdC13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJoYXJhdC1yYWRpdXMpO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iaGFyYXQtc2FmZnJvbik7XG4gIH1cblxuICAuZGVzdC1lbW9qaSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogdmFyKC0tYmhhcmF0LWJsdWUpO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtbXV0ZWQpO1xuICB9XG59XG5cbi5sYW5kaW5nLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJoYXJhdC1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWJoYXJhdC13aGl0ZSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuZm9vdGVyLWxpbmtzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtc2FmZnJvbik7XG4gICAgICBtYXJnaW46IDAgMC43NXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] }); }
}


/***/ }),

/***/ 9958:
/*!********************************************************!*\
  !*** ./src/app/component/payment/payment.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function PaymentComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Payment successful! Redirecting to your bookings...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class PaymentComponent {
    constructor(route, router, httpService, bookingFlow) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.bookingFlow = bookingFlow;
        this.bookingId = 0;
        this.amount = 0;
        this.processing = false;
        this.showError = false;
        this.showSuccess = false;
        this.errorMessage = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        this.subs.add(this.route.queryParams.subscribe(params => {
            this.bookingId = Number(params['bookingId']) || this.bookingFlow.pendingBookingId || 0;
            if (!this.bookingId) {
                this.router.navigate(['/search_flight']);
            }
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    pay() {
        if (!this.bookingId)
            return;
        this.processing = true;
        this.showError = false;
        this.subs.add(this.httpService.createPaymentOrder(this.bookingId).subscribe({
            next: (order) => {
                this.amount = order.amount;
                if (order.simulated === true || order.simulated === 'true' || !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.razorpay.enabled) {
                    this.simulatePay();
                }
                else {
                    this.openRazorpay(order);
                }
            },
            error: (err) => {
                this.processing = false;
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Could not create payment order.';
            }
        }));
    }
    simulatePay() {
        this.subs.add(this.httpService.simulatePayment(this.bookingId).subscribe({
            next: () => this.onSuccess(),
            error: (err) => this.onFail(err)
        }));
    }
    openRazorpay(order) {
        if (typeof Razorpay === 'undefined') {
            this.processing = false;
            this.showError = true;
            this.errorMessage = 'Payment gateway not loaded.';
            return;
        }
        const options = {
            key: order.keyId || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.razorpay.keyId,
            amount: Math.round(order.amount * 100),
            currency: order.currency || 'INR',
            name: 'Bharat Airlines',
            description: `Booking #${this.bookingId}`,
            order_id: order.orderId,
            handler: (response) => {
                this.subs.add(this.httpService.verifyPayment(this.bookingId, response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature).subscribe({
                    next: () => this.onSuccess(),
                    error: (err) => this.onFail(err)
                }));
            },
            modal: {
                ondismiss: () => { this.processing = false; }
            }
        };
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', () => {
            this.processing = false;
            this.showError = true;
            this.errorMessage = 'Payment failed. Please try again.';
        });
        rzp.open();
        this.processing = false;
    }
    onSuccess() {
        this.processing = false;
        this.showSuccess = true;
        this.bookingFlow.clear();
        setTimeout(() => this.router.navigate(['/my_booking']), 2000);
    }
    onFail(err) {
        this.processing = false;
        this.showError = true;
        this.errorMessage = err?.error?.message || 'Payment failed.';
    }
    static { this.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_2__.BookingFlowService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 17, vars: 6, consts: [[1, "page-enter", "container", "py-4"], [1, "section-title"], [1, "text-muted"], [1, "payment-card", "card-hover"], [1, "amount-display"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "btn-bharat-saffron", "w-100", "mt-3", 3, "disabled", "click"], ["routerLink", "/my_booking", 1, "btn", "btn-outline-secondary", "w-100", "mt-2"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Complete Payment");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Total Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PaymentComponent_div_11_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PaymentComponent_div_12_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_13_listener() { return ctx.pay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "View My Bookings");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Booking ID: ", ctx.bookingId, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", ctx.amount || ctx.bookingFlow.totalPrice || "\u2014", "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.processing);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.processing ? "Processing..." : "Pay Now", " ");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], styles: [".payment-card[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 2rem;\n  max-width: 480px;\n  box-shadow: var(--bharat-shadow);\n}\n\n.amount-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: var(--bharat-light);\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\n.amount-display[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--bharat-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmhhcmF0LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJoYXJhdC1zaGFkb3cpO1xufVxuXG4uYW1vdW50LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJoYXJhdC1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtYmx1ZSk7XG4gIH1cbn1cbiJdfQ== */"] }); }
}


/***/ }),

/***/ 7940:
/*!**********************************************************************!*\
  !*** ./src/app/component/pilot-schedule/pilot-schedule.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PilotScheduleComponent": () => (/* binding */ PilotScheduleComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function PilotScheduleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function PilotScheduleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No scheduled flights assigned yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PilotScheduleComponent_div_7_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PilotScheduleComponent_div_7_div_1_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.updateStatus(s_r4.id, "COMPLETED")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mark Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PilotScheduleComponent_div_7_div_1_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.updateStatus(s_r4.id, "CANCELLED")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function PilotScheduleComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PilotScheduleComponent_div_7_div_1_div_11_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((s_r4.flight == null ? null : s_r4.flight.flight_number) || "Flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", s_r4.flight == null ? null : s_r4.flight.source, " \u2192 ", s_r4.flight == null ? null : s_r4.flight.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Date: ", s_r4.scheduledDate, " | Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r4.assignStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.assignStatus === "ASSIGNED");
} }
function PilotScheduleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PilotScheduleComponent_div_7_div_1_Template, 12, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.schedules);
} }
class PilotScheduleComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.schedules = [];
        this.showError = false;
        this.errorMessage = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    ngOnInit() {
        this.subs.add(this.httpService.getMySchedule().subscribe({
            next: (data) => { this.schedules = data; },
            error: () => {
                this.showError = true;
                this.errorMessage = 'Could not load schedule.';
            }
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    updateStatus(id, status) {
        this.subs.add(this.httpService.updateScheduleStatus(id, status).subscribe({
            next: () => {
                this.subs.add(this.httpService.getMySchedule().subscribe({
                    next: (data) => { this.schedules = data; }
                }));
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Failed to update status.';
            }
        }));
    }
    static { this.ɵfac = function PilotScheduleComponent_Factory(t) { return new (t || PilotScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PilotScheduleComponent, selectors: [["app-pilot-schedule"]], decls: 8, vars: 3, consts: [[1, "page-enter", "container", "py-4"], [1, "section-title"], [1, "tagline"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "text-muted"], [1, "row", "g-3"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "schedule-card", "card-hover"], ["class", "d-flex gap-2 mt-2", 4, "ngIf"], [1, "d-flex", "gap-2", "mt-2"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "btn", "btn-sm", "btn-warning", 3, "click"]], template: function PilotScheduleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Flight Schedule");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bharat Airlines \u2014 Pilot Portal");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PilotScheduleComponent_div_5_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PilotScheduleComponent_div_6_Template, 2, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PilotScheduleComponent_div_7_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schedules.length === 0 && !ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schedules.length > 0);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".schedule-card[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1.25rem;\n  box-shadow: var(--bharat-shadow);\n  border-left: 4px solid var(--bharat-saffron);\n}\n.schedule-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--bharat-blue);\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbG90LXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoicGlsb3Qtc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NoZWR1bGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJoYXJhdC13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJoYXJhdC1yYWRpdXMpO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1iaGFyYXQtc2hhZG93KTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1iaGFyYXQtc2FmZnJvbik7XG5cbiAgaDUge1xuICAgIGNvbG9yOiB2YXIoLS1iaGFyYXQtYmx1ZSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG4iXX0= */"] }); }
}


/***/ }),

/***/ 3226:
/*!******************************************************!*\
  !*** ./src/app/component/profil/profil.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilComponent": () => (/* binding */ ProfilComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function ProfilComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "table", 4)(2, "tbody")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "User ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tr")(25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.verified ? "Yes" : "No");
} }
class ProfilComponent {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.user = null;
        this.showError = false;
    }
    ngOnInit() {
        this.loadProfile();
    }
    loadProfile() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/auth/user`).subscribe({
            next: (res) => {
                this.user = {
                    username: res.username,
                    email: res.email,
                    role: res.role,
                    userId: res.id,
                    contactNumber: res.contactNumber,
                    verified: res.verified
                };
                this.showError = false;
            },
            error: () => {
                this.showError = true;
                this.user = {
                    username: this.authService.getUsername(),
                    role: this.authService.getRole,
                    userId: this.authService.getUserId()
                };
            }
        });
    }
    static { this.ɵfac = function ProfilComponent_Factory(t) { return new (t || ProfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfilComponent, selectors: [["app-profil"]], decls: 4, vars: 1, consts: [[1, "container", "mt-4"], [1, "mb-3"], ["class", "card p-4", "style", "max-width: 500px;", 4, "ngIf"], [1, "card", "p-4", 2, "max-width", "500px"], [1, "table", "table-borderless"], [1, "badge", "bg-primary"]], template: function ProfilComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "My Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfilComponent_div_3_Template, 29, 5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["@charset \"UTF-8\";\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--ai-primary) !important;\n  position: relative;\n  overflow: visible;\n}\n.card[_ngcontent-%COMP%]::before {\n  content: \"\u2708\";\n  position: absolute;\n  top: -1.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 3rem;\n  height: 3rem;\n  background: linear-gradient(135deg, var(--ai-primary), var(--ai-primary-dark));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  color: #FFF;\n  box-shadow: 0 4px 12px rgba(140, 29, 24, 0.3);\n  line-height: 3rem;\n  text-align: center;\n}\n.table-borderless[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: none;\n}\n.table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 40%;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--ai-text-muted);\n  padding: 0.75rem 0.5rem;\n  vertical-align: middle;\n}\n.table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--ai-text);\n  padding: 0.75rem 0.5rem;\n  vertical-align: middle;\n}\n.table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--ai-border-light) !important;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 0.35em 0.875em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFJaEI7RUFBSyxxQkFBQTtBQURMO0FBSUE7RUFDRSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFPQTtFQUNFLGtCQUFBO0FBSkY7QUFNRTtFQUNFLFlBQUE7QUFKSjtBQU1JO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBSk47QUFPSTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBTE47QUFRSTtFQUNFLDBEQUFBO0FBTk47QUFZQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFURiIsImZpbGUiOiJwcm9maWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1ZIFBST0ZJTEUg4oCUIFByZW1pdW0gcHJvZmlsZSBjYXJkXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaDMgeyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cblxuLy8gUHJvZmlsZSBjYXJkXG4uY2FyZCB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1haS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIC8vIEF2YXRhciBpbml0aWFsIGNpcmNsZVxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfinIgnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xLjVyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYWktcHJpbWFyeSksIHZhcigtLWFpLXByaW1hcnktZGFyaykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNDAsMjksMjQsMC4zKTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gUHJvZmlsZSBkZXRhaWwgdGFibGVcbi50YWJsZS1ib3JkZXJsZXNzIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuXG4gIHRib2R5IHRyIHtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICB0aCB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgY29sb3I6IHZhcigtLWFpLXRleHQtbXV0ZWQpO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAwLjVyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0tYWktdGV4dCk7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1haS1ib3JkZXItbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIFJvbGUgYmFkZ2UgaW5zaWRlIHRhYmxlXG4uYmFkZ2UuYmctcHJpbWFyeSB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgcGFkZGluZzogMC4zNWVtIDAuODc1ZW07XG59Il19 */"] }); }
}


/***/ }),

/***/ 1177:
/*!********************************************************************************!*\
  !*** ./src/app/component/seat-selection-page/seat-selection-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeatSelectionPageComponent": () => (/* binding */ SeatSelectionPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_booking_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/booking-flow.service */ 9200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _seat_seat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seat/seat.component */ 5525);








function SeatSelectionPageComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Flight ", ctx_r0.flight.flight_number, " \u2014 ", ctx_r0.flight.source, " \u2192 ", ctx_r0.flight.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9", ctx_r0.bookingFlow.totalPrice, "");
} }
function SeatSelectionPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class SeatSelectionPageComponent {
    constructor(route, router, httpService, authService, bookingFlow) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.authService = authService;
        this.bookingFlow = bookingFlow;
        this.flightId = 0;
        this.seats = [];
        this.selectedSeat = '';
        this.showError = false;
        this.errorMessage = '';
        this.flight = null;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    ngOnInit() {
        this.flight = this.bookingFlow.selectedFlight;
        this.subs.add(this.route.paramMap.subscribe(params => {
            this.flightId = Number(params.get('id'));
            if (!this.flightId || !this.flight || Number(this.flight.id) !== this.flightId) {
                this.router.navigate(['/search_flight']);
                return;
            }
            this.loadSeats();
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    loadSeats() {
        this.subs.add(this.httpService.getSeats(this.flightId).subscribe({
            next: (data) => { this.seats = data; },
            error: () => {
                this.showError = true;
                this.errorMessage = 'Could not load seats.';
            }
        }));
    }
    onSeatSelected(seatNum) {
        this.selectedSeat = seatNum;
        this.subs.add(this.httpService.lockSeats(this.flightId, [seatNum]).subscribe({
            error: () => {
                this.showError = true;
                this.errorMessage = 'Seat could not be locked. It may be taken.';
                this.selectedSeat = '';
            }
        }));
    }
    proceedToPayment() {
        if (!this.selectedSeat || !this.flight)
            return;
        const userId = Number(this.authService.getUserId());
        this.subs.add(this.httpService.initiateBooking(this.flight.id, [this.selectedSeat], userId).subscribe({
            next: (booking) => {
                this.bookingFlow.pendingBookingId = booking.id;
                this.bookingFlow.seatNumbers = [this.selectedSeat];
                this.router.navigate(['/payment'], { queryParams: { bookingId: booking.id } });
            },
            error: (err) => {
                this.showError = true;
                this.errorMessage = err?.error?.message || 'Booking initiation failed.';
            }
        }));
    }
    static { this.ɵfac = function SeatSelectionPageComponent_Factory(t) { return new (t || SeatSelectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_booking_flow_service__WEBPACK_IMPORTED_MODULE_2__.BookingFlowService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SeatSelectionPageComponent, selectors: [["app-seat-selection-page"]], decls: 12, vars: 5, consts: [[1, "page-enter", "container", "py-4"], [1, "section-title"], ["class", "text-muted", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "seat-panel", "card-hover"], [3, "flightId", "seats", "seatSelected"], [1, "mt-4", "d-flex", "gap-2"], ["routerLink", "/search_flight", 1, "btn", "btn-outline-secondary"], [1, "btn-bharat-primary", 3, "disabled", "click"], [1, "text-muted"], [1, "ms-2"], [1, "alert", "alert-danger"]], template: function SeatSelectionPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Select Your Seat");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SeatSelectionPageComponent_p_3_Template, 4, 4, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SeatSelectionPageComponent_div_4_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "app-seat", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("seatSelected", function SeatSelectionPageComponent_Template_app_seat_seatSelected_6_listener($event) { return ctx.onSeatSelected($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SeatSelectionPageComponent_Template_button_click_10_listener() { return ctx.proceedToPayment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Continue to Payment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.flight);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("flightId", ctx.flightId)("seats", ctx.seats);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.selectedSeat);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _seat_seat_component__WEBPACK_IMPORTED_MODULE_3__.SeatSelectionComponent], styles: [".seat-panel[_ngcontent-%COMP%] {\n  background: var(--bharat-white);\n  border-radius: var(--bharat-radius);\n  padding: 1.5rem;\n  box-shadow: var(--bharat-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXQtc2VsZWN0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic2VhdC1zZWxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWF0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmhhcmF0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmhhcmF0LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYmhhcmF0LXNoYWRvdyk7XG59XG4iXX0= */"] }); }
}


/***/ }),

/***/ 5525:
/*!**************************************************!*\
  !*** ./src/app/component/seat/seat.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeatSelectionComponent": () => (/* binding */ SeatSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function SeatSelectionComponent_div_0_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeatSelectionComponent_div_0_div_3_button_1_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const seat_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.selectSeat(seat_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-success", !seat_r4.booked && seat_r4.seatNumber !== ctx_r3.selectedSeatNumber)("btn-warning", seat_r4.seatNumber === ctx_r3.selectedSeatNumber)("seat-selected-anim", seat_r4.seatNumber === ctx_r3.selectedSeatNumber)("btn-danger", seat_r4.booked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", seat_r4.seatNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", seat_r4.booked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", seat_r4.seatNumber, " ");
} }
function SeatSelectionComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeatSelectionComponent_div_0_div_3_button_1_Template, 2, 11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
function SeatSelectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SeatSelectionComponent_div_0_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 3)(5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.seatMap);
} }
class SeatSelectionComponent {
    constructor() {
        this.seats = [];
        this.seatSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.seatMap = [];
        this.selectedSeatNumber = null;
    }
    ngOnChanges(changes) {
        if (changes['seats']?.currentValue?.length) {
            this.buildSeatMap(changes['seats'].currentValue);
        }
    }
    buildSeatMap(seats) {
        const rowMap = {};
        const rowOrder = [];
        for (const seat of seats) {
            const row = seat.rowLabel;
            if (!rowMap[row]) {
                rowMap[row] = [];
                rowOrder.push(row);
            }
            rowMap[row].push({ ...seat, booked: !seat.isAvailable });
        }
        this.seatMap = rowOrder.map(row => rowMap[row]);
    }
    selectSeat(seat) {
        if (seat.booked)
            return;
        this.selectedSeatNumber = seat.seatNumber;
        this.seatSelected.emit(seat.seatNumber);
    }
    static { this.ɵfac = function SeatSelectionComponent_Factory(t) { return new (t || SeatSelectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeatSelectionComponent, selectors: [["app-seat"]], inputs: { flightId: "flightId", seats: "seats" }, outputs: { seatSelected: "seatSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "mt-3", 4, "ngIf"], [1, "mt-3"], ["class", "d-flex gap-2 mb-2", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "badge", "bg-success", "me-1"], [1, "badge", "bg-warning", "text-dark", "me-1"], [1, "badge", "bg-danger", "me-1"], [1, "d-flex", "gap-2", "mb-2"], ["type", "button", "class", "btn btn-sm", 3, "btn-success", "btn-warning", "seat-selected-anim", "btn-danger", "disabled", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", 3, "disabled", "title", "click"]], template: function SeatSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeatSelectionComponent_div_0_Template, 11, 1, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seatMap.length > 0);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".mt-3[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--ai-text-secondary);\n  margin-bottom: 1rem;\n}\n\n.d-flex.gap-2.mb-2[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  gap: 6px !important;\n  margin-bottom: 6px !important;\n}\n\n.btn.btn-sm[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 40px;\n  padding: 0;\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: var(--ai-r-xs) !important;\n  border-width: 2px;\n  cursor: pointer;\n  transition: all 0.14s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0.03em;\n}\n\n.btn.btn-sm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n\n.btn.btn-sm[_ngcontent-%COMP%]:active {\n  transform: scale(0.95) !important;\n}\n\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #166534, #14532D) !important;\n  border-color: #14532D !important;\n  color: #FFF !important;\n  box-shadow: 0 2px 4px rgba(22, 101, 52, 0.2);\n}\n\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #14532D, #0F3F21) !important;\n  box-shadow: 0 3px 8px rgba(22, 101, 52, 0.35);\n}\n\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--ai-gold), var(--ai-gold-dark)) !important;\n  border-color: var(--ai-gold-dark) !important;\n  color: #1A0F0F !important;\n  box-shadow: 0 2px 6px rgba(201, 168, 76, 0.4);\n  transform: scale(1.08);\n}\n\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #991B1B, #7F1D1D) !important;\n  border-color: #7F1D1D !important;\n  color: rgba(255, 255, 255, 0.65) !important;\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  transform: none !important;\n  box-shadow: none;\n}\n\nsmall.text-muted[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n\nsmall.text-muted[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.3em 0.7em;\n  border-radius: var(--ai-r-full);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBTkY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFQRjs7QUFVRTtFQUF5QixxQkFBQTtBQVAzQjs7QUFRRTtFQUF3QixpQ0FBQTtBQUwxQjs7QUFTQTtFQUNFLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0FBTkY7O0FBUUU7RUFDRSxnRUFBQTtFQUNBLDZDQUFBO0FBTko7O0FBV0E7RUFDRSxtRkFBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0FBUkY7O0FBWUE7RUFDRSxnRUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFXRTtFQUFVLDBCQUFBO0VBQTRCLGdCQUFBO0FBUHhDOztBQVdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVVFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBUkoiLCJmaWxlIjoic2VhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0VBVCBNQVAg4oCUIEludGVyYWN0aXZlIGNhYmluIHNlYXQgc2VsZWN0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLm10LTMge1xuICBoNiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gICAgY29sb3I6IHZhcigtLWFpLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5cbi8vIFNlYXQgcm93XG4uZC1mbGV4LmdhcC0yLm1iLTIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xufVxuXG4vLyBJbmRpdmlkdWFsIHNlYXQgYnV0dG9uXG4uYnRuLmJ0bi1zbSB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1haS1yLXhzKSAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNHMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG5cbiAgLy8gT3ZlcnJpZGUgZ2xvYmFsIGJ1dHRvbiBob3ZlciBsaWZ0IGZvciBzZWF0c1xuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gICY6YWN0aXZlICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogc2NhbGUoMC45NSkgIWltcG9ydGFudDsgfVxufVxuXG4vLyBBdmFpbGFibGUg4oCUIGdyZWVuXG4uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE2NjUzNCwgIzE0NTMyRCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMTQ1MzJEICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDIyLDEwMSw1MiwwLjIpO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxNDUzMkQsICMwRjNGMjEpICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMjIsMTAxLDUyLDAuMzUpO1xuICB9XG59XG5cbi8vIFNlbGVjdGVkIOKAlCBnb2xkXG4uYnRuLmJ0bi13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYWktZ29sZCksIHZhcigtLWFpLWdvbGQtZGFyaykpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWktZ29sZC1kYXJrKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFBMEYwRiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgyMDEsMTY4LDc2LDAuNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG5cbi8vIEJvb2tlZCDigJQgcmVkL211dGVkXG4uYnRuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTkxQjFCLCAjN0YxRDFEKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM3RjFEMUQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSkgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC42NTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IGJveC1zaGFkb3c6IG5vbmU7IH1cbn1cblxuLy8gTGVnZW5kIGJhZGdlc1xuc21hbGwudGV4dC1tdXRlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgLmJhZGdlIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1haS1yLWZ1bGwpO1xuICB9XG59Il19 */"] }); }
}


/***/ }),

/***/ 8010:
/*!**********************************************************!*\
  !*** ./src/app/component/viewuser/viewuser.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewuserComponent": () => (/* binding */ ViewuserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/http.service */ 3119);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ViewuserComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function ViewuserComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td")(22, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const b_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.user == null ? null : b_r2.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.flight == null ? null : b_r2.flight.flight_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.pnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.seatNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.flight == null ? null : b_r2.flight.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.flight == null ? null : b_r2.flight.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 14, b_r2.bookingDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.paymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-success", b_r2.status === "CONFIRMED")("bg-danger", b_r2.status === "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", b_r2.status, " ");
} }
class ViewuserComponent {
    constructor(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
        this.bookingsListUser = [];
        this.showError = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.loadBookings();
    }
    loadBookings() {
        this.httpService.getAllBookings().subscribe({
            next: (data) => {
                this.bookingsListUser = data;
                this.showError = false;
            },
            error: () => {
                this.showError = true;
                this.errorMessage = 'Failed to load bookings.';
            }
        });
    }
    static { this.ɵfac = function ViewuserComponent_Factory(t) { return new (t || ViewuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewuserComponent, selectors: [["app-viewuser"]], decls: 32, vars: 2, consts: [[1, "container"], [1, "mb-3"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card", "p-3"], [1, "table", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [1, "badge", "bg-info", "text-dark"], [1, "badge"]], template: function ViewuserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "View All Bookings");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ViewuserComponent_div_3_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Booking Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 4)(8, "thead", 5)(9, "tr")(10, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sr#");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Passenger");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Flight No");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "PNR");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Seats");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Source");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Booking Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Payment");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ViewuserComponent_tr_31_Template, 24, 17, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bookingsListUser);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["@charset \"UTF-8\";\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCCA \";\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 600;\n  color: var(--ai-text);\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  font-weight: 700;\n  color: var(--ai-primary);\n  letter-spacing: 0.04em;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  font-family: \"Fira Code\", \"Consolas\", monospace;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--ai-text);\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  font-size: 0.8125rem;\n  color: var(--ai-text-muted);\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXd1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUFLLHFCQUFBO0FBREw7QUFJRTtFQUFhLGNBQUE7QUFBZjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQURGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQU1BO0VBQ0UsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUhGO0FBT0E7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FBSkY7QUFPQTtFQUNFO0lBQVMsY0FBQTtJQUFnQixnQkFBQTtJQUFrQixtQkFBQTtFQUQzQztBQUNGIiwiZmlsZSI6InZpZXd1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWSUVXIEFMTCBCT09LSU5HUyAoQWRtaW4pIOKAlCBNYXN0ZXIgYm9va2luZ3MgdGFibGVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5oMyB7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuXG4uY2FyZCB7XG4gIGg2OjpiZWZvcmUgeyBjb250ZW50OiAn8J+TiiAnOyB9XG59XG5cbi8vIFBhc3NlbmdlciBuYW1lXG4udGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWFpLXRleHQpO1xufVxuXG4vLyBGbGlnaHQgbnVtYmVyXG4udGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFpLXByaW1hcnkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4vLyBQTlIg4oCUIG1vbm9zcGFjZVxuLnRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBDb2RlJywgJ0NvbnNvbGFzJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgY29sb3I6IHZhcigtLWFpLXRleHQpO1xufVxuXG4vLyBCb29raW5nIGRhdGVcbi50YWJsZSB0ZDpudGgtY2hpbGQoOCkge1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgY29sb3I6IHZhcigtLWFpLXRleHQtbXV0ZWQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRhYmxlIHsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93LXg6IGF1dG87IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbn0iXX0= */"] }); }
}


/***/ }),

/***/ 5055:
/*!*******************************!*\
  !*** ./src/app/role.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class RoleGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route) {
        const expectedRoles = route.data['roles'] || [];
        const role = this.authService.getRole;
        if (expectedRoles.length === 0 || expectedRoles.includes(role)) {
            return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
    }
    static { this.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 2152:
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/loading.service */ 8029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function LoadingSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class LoadingSpinnerComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
  }

  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      decls: 2,
      vars: 3,
      consts: [["class", "global-loader-overlay", 4, "ngIf"], [1, "global-loader-overlay"], [1, "global-loader-spinner"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingSpinnerComponent_div_0_Template, 2, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loadingService.isLoading$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxpQkFBQTtBQUVSIiwiZmlsZSI6ImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGNvbnRlbnRzOyB9Il19 */"]
    });
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/**
 * Local development config.
 * Copy from environment.example.ts and fill in your keys.
 */
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    /** Set enabled: true only after adding real keys (see environment.example.ts). */
    recaptcha: {
        enabled: false,
        siteKey: ''
    },
    /** Set enabled: true when backend razorpay.enabled=true and keys are configured. */
    razorpay: {
        enabled: false,
        keyId: ''
    },
    session: {
        inactivityTimeoutMs: 15 * 60 * 1000,
        activityPingIntervalMs: 60 * 1000
    }
};


/***/ }),

/***/ 6701:
/*!**********************************************!*\
  !*** ./src/interceptors/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2567);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session.service */ 5920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







class AuthInterceptor {
    constructor(authService, sessionService, router) {
        this.authService = authService;
        this.sessionService = sessionService;
        this.router = router;
    }
    intercept(req, next) {
        const token = this.authService.getToken();
        let authReq = req;
        if (token && !req.url.includes('/api/auth/login') && !req.url.includes('/api/auth/register')
            && !req.url.includes('/api/auth/verify-otp') && !req.url.includes('/api/auth/forgot-password')
            && !req.url.includes('/api/auth/reset-password')) {
            authReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => {
            if (err.status === 401 || err.status === 403) {
                const isAuthCall = req.url.includes('/api/auth/login') || req.url.includes('/api/auth/register');
                if (!isAuthCall && this.authService.getToken()) {
                    this.sessionService.stop();
                    this.authService.logout();
                    this.router.navigate(['/login'], { queryParams: { reason: err.error?.message || 'Session expired' } });
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
        }));
    }
    static { this.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac }); }
}


/***/ }),

/***/ 1653:
/*!*************************************************!*\
  !*** ./src/interceptors/loading.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loading.service */ 8029);




class LoadingInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    intercept(req, next) {
        if (req.url.includes('/api/auth/user/activity')) {
            return next.handle(req);
        }
        this.loadingService.show();
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loadingService.hide()));
    }
    static { this.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac }); }
}


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2567:
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    register(data) {
        return this.http.post(`${this.baseUrl}/api/auth/register`, data);
    }
    verifyOtp(email, otp) {
        return this.http.post(`${this.baseUrl}/api/auth/verify-otp`, { email, otp });
    }
    login(credentials) {
        return this.http.post(`${this.baseUrl}/api/auth/login`, credentials);
    }
    forgotPassword(email) {
        return this.http.post(`${this.baseUrl}/api/auth/forgot-password`, { email });
    }
    resetPassword(email, otp, newPassword) {
        return this.http.post(`${this.baseUrl}/api/auth/reset-password`, { email, otp, newPassword });
    }
    pingActivity() {
        return this.http.post(`${this.baseUrl}/api/auth/user/activity`, {});
    }
    logoutServer() {
        return this.http.post(`${this.baseUrl}/api/auth/logout`, {});
    }
    logoutAllDevices() {
        return this.http.post(`${this.baseUrl}/api/auth/logout-all`, {});
    }
    saveAuth(res) {
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
    getToken() {
        return localStorage.getItem('token') || '';
    }
    get getRole() {
        const token = this.getToken();
        if (!token) {
            return '';
        }
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.role || localStorage.getItem('role') || '';
        }
        catch {
            return localStorage.getItem('role') || '';
        }
    }
    getUserId() {
        return localStorage.getItem('userId') || '';
    }
    getUsername() {
        return localStorage.getItem('username') || '';
    }
    isLoggedIn() {
        return !!this.getToken() && !this.isTokenExpired();
    }
    isTokenExpired() {
        const token = this.getToken();
        if (!token) {
            return true;
        }
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp * 1000 < Date.now();
        }
        catch {
            return true;
        }
    }
    touchActivity() {
        localStorage.setItem('lastActivity', String(Date.now()));
    }
    getLastActivity() {
        return Number(localStorage.getItem('lastActivity') || '0');
    }
    isInactive() {
        const last = this.getLastActivity();
        if (!last) {
            return false;
        }
        return Date.now() - last > _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.session.inactivityTimeoutMs;
    }
    clearLocal() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('sessionId');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('lastActivity');
    }
    logout() {
        this.clearLocal();
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 9200:
/*!**********************************************!*\
  !*** ./src/services/booking-flow.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingFlowService": () => (/* binding */ BookingFlowService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BookingFlowService {
    constructor() {
        this.searchParams = null;
        this.selectedFlight = null;
        this.seatNumbers = [];
        this.pendingBookingId = null;
        this.totalPrice = 0;
        this.pendingEmail = '';
    }
    setSearchParams(params) {
        this.searchParams = params;
    }
    setFlight(flight, totalPrice) {
        this.selectedFlight = flight;
        this.totalPrice = totalPrice;
        this.seatNumbers = [];
        this.pendingBookingId = null;
    }
    clear() {
        this.searchParams = null;
        this.selectedFlight = null;
        this.seatNumbers = [];
        this.pendingBookingId = null;
        this.totalPrice = 0;
    }
    static { this.ɵfac = function BookingFlowService_Factory(t) { return new (t || BookingFlowService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingFlowService, factory: BookingFlowService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 3119:
/*!**************************************!*\
  !*** ./src/services/http.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 2567);






class HttpService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
    }
    unwrap() {
        return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => (res?.data !== undefined ? res.data : res));
    }
    getAllFlights() {
        return this.http.get(`${this.serverName}/api/flights`, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    createFlight(flight) {
        return this.http.post(`${this.serverName}/api/flights`, flight, { headers: this.getHeaders() });
    }
    updateFlight(id, flight) {
        return this.http.put(`${this.serverName}/api/flights/${id}`, flight, { headers: this.getHeaders() });
    }
    searchFlights(source, destination, date, filters) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('source', source)
            .set('destination', destination)
            .set('date', date);
        if (filters?.minPrice != null)
            params = params.set('minPrice', filters.minPrice);
        if (filters?.maxPrice != null)
            params = params.set('maxPrice', filters.maxPrice);
        if (filters?.sortBy)
            params = params.set('sortBy', filters.sortBy);
        return this.http.get(`${this.serverName}/api/flights/search`, { headers: this.getHeaders(), params })
            .pipe(this.unwrap());
    }
    suggestSource() {
        return this.http.get(`${this.serverName}/api/flights/source/suggest`, { headers: this.getHeaders() });
    }
    suggestDestination() {
        return this.http.get(`${this.serverName}/api/flights/destination/suggest`, { headers: this.getHeaders() });
    }
    checkAvailability(flightId, travelerCount) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('travelerCount', travelerCount.toString());
        return this.http.get(`${this.serverName}/api/flights/${flightId}/check-availability`, { headers: this.getHeaders(), params });
    }
    initiateBooking(flightId, seatNumbers, userId) {
        return this.http.post(`${this.serverName}/api/booking/initiate`, { flightId, seatNumbers, userId }, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    createPaymentOrder(bookingId) {
        return this.http.post(`${this.serverName}/api/payment/create-order/${bookingId}`, {}, { headers: this.getHeaders() }).pipe(this.unwrap());
    }
    simulatePayment(bookingId) {
        return this.http.post(`${this.serverName}/api/payment/simulate-success/${bookingId}`, {}, { headers: this.getHeaders() }).pipe(this.unwrap());
    }
    verifyPayment(bookingId, paymentId, orderId, signature) {
        return this.http.post(`${this.serverName}/api/payment/verify`, { bookingId: String(bookingId), paymentId, orderId, signature }, { headers: this.getHeaders() }).pipe(this.unwrap());
    }
    retryPayment(bookingId) {
        return this.http.post(`${this.serverName}/api/payment/retry/${bookingId}`, {}, { headers: this.getHeaders() }).pipe(this.unwrap());
    }
    getMyBookings() {
        return this.http.get(`${this.serverName}/api/booking/bookings`, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    getAllBookings() {
        return this.http.get(`${this.serverName}/api/booking/bookingList`, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    updateBookingStatus(id, status) {
        return this.http.put(`${this.serverName}/api/booking/${id}/status`, { status }, { headers: this.getHeaders() }).pipe(this.unwrap());
    }
    cancelBooking(id) {
        return this.http.delete(`${this.serverName}/api/booking/bookings/${id}`, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    downloadTicket(id) {
        return this.http.get(`${this.serverName}/api/booking/ticket/${id}`, { headers: this.getHeaders(), responseType: 'blob' });
    }
    getAnalytics() {
        return this.http.get(`${this.serverName}/api/admin/analytics/dashboard`, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    lockSeats(flightId, seatNumbers) {
        return this.http.post(`${this.serverName}/api/seats/flights/${flightId}/lock`, { seatNumbers }, { headers: this.getHeaders() }).pipe(this.unwrap());
    }
    getPilots() {
        return this.http.get(`${this.serverName}/api/pilot/schedule/users`, { headers: this.getHeaders() });
    }
    getAllSchedules() {
        return this.http.get(`${this.serverName}/api/pilot/schedule`, { headers: this.getHeaders() });
    }
    getMySchedule() {
        return this.http.get(`${this.serverName}/api/pilot/schedule/scheduleUser`, { headers: this.getHeaders() });
    }
    assignPilot(flightId, pilotId, scheduledDate, assignStatus) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('flightId', flightId.toString())
            .set('pilotId', pilotId.toString())
            .set('scheduledDate', scheduledDate)
            .set('assignStatus', assignStatus);
        return this.http.post(`${this.serverName}/api/pilot/schedule/admin/assign-pilot`, null, { headers: this.getHeaders(), params });
    }
    updateScheduleStatus(id, status) {
        return this.http.put(`${this.serverName}/api/pilot/schedule/${id}/status`, { status }, { headers: this.getHeaders() });
    }
    getSeats(flightId) {
        return this.http.get(`${this.serverName}/api/seats/flights/${flightId}/seats`, { headers: this.getHeaders() })
            .pipe(this.unwrap());
    }
    static { this.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 8029:
/*!*****************************************!*\
  !*** ./src/services/loading.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LoadingService {
    constructor() {
        this.count = 0;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isLoading$ = this.loading$.asObservable();
    }
    show() {
        this.count++;
        this.loading$.next(true);
    }
    hide() {
        this.count = Math.max(0, this.count - 1);
        if (this.count === 0) {
            this.loading$.next(false);
        }
    }
    static { this.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 5920:
/*!*****************************************!*\
  !*** ./src/services/session.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






class SessionService {
    constructor(authService, router, zone) {
        this.authService = authService;
        this.router = router;
        this.zone = zone;
        this.activityHandler = () => this.authService.touchActivity();
    }
    start() {
        this.stop();
        if (!this.authService.isLoggedIn()) {
            return;
        }
        this.authService.touchActivity();
        this.bindActivityListeners();
        this.zone.runOutsideAngular(() => {
            this.pingSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.session.activityPingIntervalMs).subscribe(() => {
                this.zone.run(() => this.onPing());
            });
            this.idleSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(10000).subscribe(() => {
                this.zone.run(() => this.checkIdle());
            });
        });
    }
    stop() {
        this.pingSub?.unsubscribe();
        this.idleSub?.unsubscribe();
        this.pingSub = undefined;
        this.idleSub = undefined;
        this.unbindActivityListeners();
    }
    onPing() {
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
    checkIdle() {
        if (this.authService.isLoggedIn() && this.authService.isInactive()) {
            this.forceLogout('Session expired due to inactivity');
        }
    }
    forceLogout(message) {
        const token = this.authService.getToken();
        this.stop();
        if (token) {
            this.authService.logoutServer().subscribe({ complete: () => this.finishLogout(message) });
        }
        else {
            this.finishLogout(message);
        }
    }
    finishLogout(message) {
        this.authService.logout();
        this.router.navigate(['/login'], {
            queryParams: message ? { reason: message } : {}
        });
    }
    bindActivityListeners() {
        ['click', 'keydown', 'mousemove', 'scroll'].forEach(evt => window.addEventListener(evt, this.activityHandler, { passive: true }));
    }
    unbindActivityListeners() {
        ['click', 'keydown', 'mousemove', 'scroll'].forEach(evt => window.removeEventListener(evt, this.activityHandler));
    }
    static { this.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' }); }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map