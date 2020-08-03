<template>
  <b-nav>
    <b-nav-item to="/">{{ $t('pages.home.title') }}</b-nav-item>
    <b-nav-item to="/survey">{{ $t('pages.survey.title') }}</b-nav-item>

    <template v-if="!Auth.loggedIn">
      <b-nav-item to="/admin/login">
        <b-icon-box-arrow-in-right />
        {{ $t('actions.login') }}
      </b-nav-item>
    </template>
    <template v-else>
      <b-nav-item to="/admin">{{ $t('pages.admin.title') }}</b-nav-item>
      <b-nav-item @click="Auth.logout">
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

    <b-nav-item>
      <template v-if="Location.coords">
        Latitude: {{ Location.coords.latitude.toFixed(2) }}<br />
        Longitude: {{ Location.coords.longitude.toFixed(2) }}<br />
        Location: {{ Location.locationName }}
      </template>
      <template v-else-if="Location.error">
        Location Error: {{ Location.error.message }}
      </template>
      <template v-else>
        Location: undefined
      </template>
    </b-nav-item>
  </b-nav>
</template>

<script>
import { Auth } from '~/state/auth'
import { Location } from '~/state/location'

export default {
  data() {
    return {
      Auth,
      Location,
    }
  },
}
</script>
