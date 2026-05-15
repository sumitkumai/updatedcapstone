/**
 * Local development config.
 * Copy from environment.example.ts and fill in your keys.
 */
export const environment = {
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
