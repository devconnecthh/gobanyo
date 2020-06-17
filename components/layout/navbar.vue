<template>
  <b-nav>
    <b-nav-item to="/">{{ $t('pages.home.title') }}</b-nav-item>
    <b-nav-item to="/survey">{{ $t('pages.survey.title') }}</b-nav-item>

    <template v-if="!loggedIn">
      <b-nav-item to="/admin/login">
        <b-icon-box-arrow-in-right />
        {{ $t('actions.login') }}
      </b-nav-item>
    </template>
    <template v-else>
      <b-nav-item to="/admin">{{ $t('pages.admin.title') }}</b-nav-item>
      <b-nav-item @click="logout">
        {{ $t('actions.logout') }}
        <b-icon-box-arrow-right />
      </b-nav-item>
    </template>

    <b-nav-item
      v-for="locale in $i18n.locales"
      :key="locale.code"
      @click="$i18n.setLocale(locale.code)"
    >
      <img :src="require(`~/assets/images/icon-${locale.code}.png`)" />
      {{ locale.name }}</b-nav-item
    >
  </b-nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: { ...mapState('auth', ['loggedIn']) },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>
