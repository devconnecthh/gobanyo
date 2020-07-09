<template>
  <div>
    <b-alert v-if="successMessage" show variant="success">
      {{ successMessage }}
    </b-alert>
    <b-form v-else @submit.prevent="submit">
      <b-alert :show="!!errorMessage" variant="danger">
        {{ errorMessage }}
      </b-alert>
      <label>
        Old PIN
        <b-input
          v-model="oldPin"
          inputmode="numeric"
          type="password"
          autofocus
        />
      </label>
      <label>
        New PIN
        <b-input v-model="newPin" inputmode="numeric" type="password" />
      </label>
      <b-btn type="submit">
        {{ $t('pages.adminChangePin.submitButton') }}
      </b-btn>
    </b-form>
  </div>
</template>

<script>
import { Auth, AuthError, PinRequirementError } from '~/state/auth'

export default {
  name: 'ChangePinPage',
  middleware: 'auth',
  data() {
    return {
      oldPin: '',
      newPin: '',
      errorMessage: null,
      successMessage: null,
    }
  },
  methods: {
    submit() {
      this.errorMessage = null
      try {
        Auth.changePin(this.oldPin, this.newPin)
        this.successMessage = 'Successfully changed'
      } catch (error) {
        if (error instanceof AuthError) {
          this.errorMessage = 'Old PIN is invalid'
          return
        }

        if (error instanceof PinRequirementError) {
          this.errorMessage = 'New PIN is invalid'
          return
        }

        throw error
      }
    },
  },
}
</script>
