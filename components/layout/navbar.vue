<template>
  <b-nav>
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/survey">Survey</b-nav-item>
    <b-nav-item to="/admin/export">Export</b-nav-item>
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
