<template>
  <main>
    <h1>Administration</h1>
    <nuxt-link to="/admin/export">Export</nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'AdminIndexPage',
  middleware: 'auth'
}
</script>
