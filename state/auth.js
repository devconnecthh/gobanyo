import Vue from 'vue'
import {
  PIN_STORAGE_KEY,
  PIN_PRECONFIGURED,
  LOGGED_IN_STORAGE_KEY,
} from '~/config/auth'

const storage = {
  get login() {
    return JSON.parse(localStorage.getItem(LOGGED_IN_STORAGE_KEY))
  },
  set login(value) {
    localStorage.setItem(LOGGED_IN_STORAGE_KEY, JSON.stringify(value))
  },
  get pin() {
    return (
      JSON.parse(localStorage.getItem(PIN_STORAGE_KEY)) || PIN_PRECONFIGURED
    )
  },
  set pin(newPin) {
    localStorage.setItem(PIN_STORAGE_KEY, JSON.stringify(newPin))
  },
}

export function isCurrentPin(pin) {
  return pin === storage.pin
}

export class AuthError extends Error {}

export class PinRequirementError extends Error {}

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
    changePin(oldPin, newPin) {
      if (!isCurrentPin(oldPin)) {
        throw new AuthError('PIN invalid')
      }
      if (newPin.length < 4) {
        throw new PinRequirementError('PIN too short')
      }
      storage.pin = newPin
    },
  },
})
