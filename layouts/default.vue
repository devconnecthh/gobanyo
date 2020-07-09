<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/layout/navbar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/base.scss';
</style>
