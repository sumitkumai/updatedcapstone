export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080',
  recaptcha: {
    enabled: false,
    siteKey: ''
  },
  razorpay: {
    enabled: false,
    keyId: ''
  },
  session: {
    inactivityTimeoutMs: 15 * 60 * 1000,
    activityPingIntervalMs: 60 * 1000
  }
};
