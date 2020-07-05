// the PIN is only used to complicate access to configuration & data-sharing
// on-site, where a user will have trouble accessing the console
// to bypass authorization
export const PIN_PRECONFIGURED = process.env.PIN_PRECONFIGURED || '1234'

export const PIN_STORAGE_KEY = 'auth_pin'

export const PIN_RETRY_TIMEOUT_MS = 2500

export const LOGGED_IN_STORAGE_KEY = 'auth_logged_in'
