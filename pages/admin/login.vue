<template>
  <main>
    <b-alert v-if="pinInvalidError" show variant="warning">
      {{ $t('pages.adminLogin.invalidPin') }}
    </b-alert>
    <b-form v-else @submit.prevent="submit">
      <label>
        {{ $t('pages.adminLogin.input') }}
        <b-input v-model="pin" type="number" />
      </label>
      <b-btn type="submit">{{ $t('actions.login') }}</b-btn>
    </b-form>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import { PIN_RETRY_TIMEOUT_MS } from '~/config/auth'

export default {
  name: 'AdminLoginPage',
  data() {
    return {
      pin: '',
      pinInvalidError: false
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit() {
      try {
        this.login(this.pin)
        this.$router.push('/admin')
      } catch (e) {
        this.pin = ''
        this.pinInvalidError = true
        setTimeout(() => {
          this.pinInvalidError = false
        }, PIN_RETRY_TIMEOUT_MS)
      }
    }
  }
}
</script>
