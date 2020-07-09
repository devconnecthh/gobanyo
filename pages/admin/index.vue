<template>
  <main>
    <h1>{{ $t('pages.admin.title') }}</h1>
    <nuxt-link to="/admin/export">{{
      $t('pages.adminExport.title')
    }}</nuxt-link>
    <br />
    <nuxt-link to="/admin/change-pin">{{
      $t('pages.adminChangePin.title')
    }}</nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'AdminIndexPage',
  middleware: 'auth',
}
</script>
