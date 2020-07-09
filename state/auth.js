import Vue from 'vue'
import {
  PIN_STORAGE_KEY,
  PIN_PRECONFIGURED,
  LOGGED_IN_STORAGE_KEY,
} from '~/config/auth'

export function getPin() {
  return localStorage.getItem(PIN_STORAGE_KEY) || PIN_PRECONFIGURED
}

const storage = {
  get login() {
    return JSON.parse(localStorage.getItem(LOGGED_IN_STORAGE_KEY))
  },
  set login(value) {
    localStorage.setItem(LOGGED_IN_STORAGE_KEY, JSON.stringify(value))
  },
}

export function isCurrentPin(pin) {
  return pin === getPin()
}

export class AuthError extends Error {}

export const Auth = new Vue({
  data() {
    return {
      loggedIn: storage.login,
    }
  },
  methods: {
    login(pin) {
      if (!isCurrentPin(pin)) {
        throw new AuthError('PIN invalid')
      }
      this.loggedIn = true
      storage.login = true
    },
    logout() {
      this.loggedIn = false
      storage.login = false
      window.location.href = '/'
    },
  },
})
