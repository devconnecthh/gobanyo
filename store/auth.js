import { PIN_STORAGE_KEY, PIN_PRECONFIGURED } from '~/config/auth'

function getPin() {
  return localStorage.getItem(PIN_STORAGE_KEY) || PIN_PRECONFIGURED
}

function isCurrentPin(pin) {
  return pin === getPin()
}

export const namespaced = true

export const state = () => ({
  loggedIn: false
})

export const mutations = {
  login(state) {
    state.loggedIn = true
  },
  logout(state) {
    state.loggedIn = false
  }
}

export const actions = {
  login({ commit }, pin) {
    if (!isCurrentPin(pin)) {
      throw new Error('PIN invalid')
    }
    commit('login')
  },
  logout({ commit }) {
    commit('logout')
    this.app.router.push('/')
  }
}
