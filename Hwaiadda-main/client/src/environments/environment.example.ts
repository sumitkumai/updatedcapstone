/**
 * API KEYS — FRONTEND (Angular)
 * =============================
 * 1. Copy this file to environment.ts (and environment.prod.ts for production).
 * 2. Fill in the values below.
 *
 * | Key              | Where to get it                          | Required when                    |
 * |------------------|------------------------------------------|----------------------------------|
 * | recaptcha.siteKey| Google reCAPTCHA admin (v2 checkbox)     | recaptcha.enabled = true         |
 * | razorpay.keyId   | Razorpay Dashboard → API Keys (Key ID)   | razorpay.enabled = true          |
 *
 * Backend must use the matching secret keys (see application.properties.example).
 * Keep recaptcha.enabled and razorpay.enabled in sync with the server.
 */
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',

  recaptcha: {
    enabled: false,
    siteKey: 'PASTE_RECAPTCHA_SITE_KEY_HERE'
  },

  razorpay: {
    enabled: false,
    keyId: 'rzp_test_PASTE_KEY_ID_HERE'
  },

  session: {
    inactivityTimeoutMs: 15 * 60 * 1000,
    activityPingIntervalMs: 60 * 1000
  }
};
