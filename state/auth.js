import Vue from 'vue'
import { PIN_STORAGE_KEY, PIN_PRECONFIGURED } from '~/config/auth'

export function getPin() {
  return localStorage.getItem(PIN_STORAGE_KEY) || PIN_PRECONFIGURED
}

export function isCurrentPin(pin) {
  return pin === getPin()
}

export class AuthError extends Error {}

export const Auth = new Vue({
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    login(pin) {
      if (!isCurrentPin(pin)) {
        throw new AuthError('PIN invalid')
      }
      this.loggedIn = true
    },
    logout() {
      this.loggedIn = false
      window.location.href = '/'
    }
  }
})
