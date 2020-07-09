<template>
  <main>
    <b-alert v-if="pinInvalidError" show variant="warning">
      {{ $t('pages.adminLogin.invalidPin') }}
    </b-alert>
    <b-form v-else @submit.prevent="submit">
      <label>
        {{ $t('pages.adminLogin.input') }}
        <b-input v-model="pin" type="password" inputmode="numeric" />
      </label>
      <b-btn type="submit">{{ $t('actions.login') }}</b-btn>
    </b-form>
  </main>
</template>

<script>
import { Auth, AuthError } from '~/state/auth'
import { PIN_RETRY_TIMEOUT_MS } from '~/config/auth'

export default {
  name: 'AdminLoginPage',
  data() {
    return {
      Auth,
      pin: '',
      pinInvalidError: false,
    }
  },
  methods: {
    submit() {
      try {
        this.Auth.login(this.pin)
        this.$router.push('/admin')
      } catch (e) {
        if (!(e instanceof AuthError)) {
          throw e
        }
        this.pin = ''
        this.pinInvalidError = true
        setTimeout(() => {
          this.pinInvalidError = false
        }, PIN_RETRY_TIMEOUT_MS)
      }
    },
  },
}
</script>
