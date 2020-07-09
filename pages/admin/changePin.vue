<template>
  <div>
    <b-form>
      <b-input
        v-model="oldPin"
        inputmode="numeric"
        placeholder="Old pin"
        type="password"
        autofocus
      />
      <b-input
        v-model="newPin"
        inputmode="numeric"
        placeholder="New pin"
        type="password"
      />
    </b-form>
    <b-btn type="submit" @click="submit()">Submit</b-btn>
  </div>
</template>

<script>
import { Auth, AuthError } from '~/state/auth'

export default {
  name: 'ChangePinPage',
  data() {
    return {
      Auth,
      oldPin: '',
      newPin: '',
    }
  },
  methods: {
    submit() {
      try {
        this.Auth.changePin(this.oldPin, this.newPin)
      } catch (e) {
        if (!(e instanceof AuthError)) {
          throw e
        }
        console.log('something went wrong')
      }
    },
  },
}
</script>
