<template>
  <div>
    <b-btn v-if="canShare" @click="share">{{ $t('actions.share') }}</b-btn>
    <b-btn :href="jsonDataUri" download="feedback.json">{{
      $t('actions.download')
    }}</b-btn>
    <pre>{{ dbContent }}</pre>
  </div>
</template>
<script>
import { get, keys } from 'idb-keyval'

async function loadTimestamp(timestamp) {
  const value = await get(timestamp)
  return {
    id: timestamp,
    ...value
  }
}

async function getDbContent() {
  const timestamps = await keys()

  const answers = await Promise.all(timestamps.map(loadTimestamp))

  return answers
}

export default {
  name: 'AdminExportPage',
  middleware: 'auth',
  data() {
    return { dbContent: {}, canShare: false }
  },
  computed: {
    jsonDataUri() {
      return `data:application/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(this.dbContent)
      )}`
    }
  },
  mounted() {
    this.loadContent()
    this.canShare = typeof navigator !== 'undefined' && 'share' in navigator
  },
  methods: {
    async loadContent() {
      this.dbContent = await getDbContent()
    },
    async share() {
      const shareData = {
        title: `Result exports ${new Date().toISOString()}`,
        text: JSON.stringify(this.dbContent, null, 2)
      }
      await navigator.share(shareData).catch(() => null)
    }
  }
}
</script>
