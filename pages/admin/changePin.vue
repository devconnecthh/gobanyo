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
    <b-btn type="submit">Submit</b-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPin: '',
      newPin: ''
    }
  }
}
</script>
