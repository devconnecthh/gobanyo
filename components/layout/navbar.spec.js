import { render, screen } from '@testing-library/vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import Navbar from './navbar'
import * as auth from '~/store/auth'

function renderScreen(loggedIn) {
  render(
    Navbar,
    {
      store: {
        modules: {
          auth
        }
      }
    },
    (vue, store) => {
      vue.use(VueI18n)
      vue.use(BootstrapVue)
      vue.use(IconsPlugin)
      store.state.auth.loggedIn = loggedIn
      return {
        i18n: new VueI18n({})
      }
    }
  )
}

describe('when not logged in', () => {
  beforeEach(() => {
    renderScreen(false)
  })

  it('should show a link to the home page', () => {
    expect(screen.getByText('Home')).toHaveAttribute('href', '/')
  })

  it('should show a login button', () => {
    expect(screen.getByText('Login')).toHaveAttribute('href', '/admin/login')
  })

  it('should not show a link to the admin page', () => {
    expect(screen.queryByText('Admin')).not.toBeInTheDocument()
  })
})

describe('when logged in', () => {
  beforeEach(() => {
    renderScreen(true)
  })

  it('should show a logout button', () => {
    screen.getByText('Logout')
  })

  it('should show a link to the admin page', () => {
    screen.getByText('Admin')
  })
})
