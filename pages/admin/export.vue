<template>
  <div>
    <b-progress-bar v-if="!csvContent" />
    <template v-else>
      <b-btn v-if="canShare" @click="share">{{ $t('actions.share') }}</b-btn>
      <b-btn :href="csvDataUri" download="feedback.csv">{{
        $t('actions.download')
      }}</b-btn>
      <pre>{{ csvContent }}</pre>
    </template>
  </div>
</template>
<script>
import { get, keys } from 'idb-keyval'
import * as jsonexport from 'jsonexport/dist'

async function loadTimestamp(timestamp) {
  const value = await get(timestamp)
  return {
    id: timestamp,
    ...value,
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
    return { csvContent: null, canShare: false }
  },
  computed: {
    csvDataUri() {
      return `data:text/csv;charset=utf-8,${encodeURIComponent(
        this.csvContent,
      )}`
    },
  },
  mounted() {
    this.loadContent()
    this.canShare = typeof navigator !== 'undefined' && 'share' in navigator
  },
  methods: {
    async loadContent() {
      const dbContent = await getDbContent()
      this.csvContent = await jsonexport(dbContent)
    },
    async share() {
      const file = new File([this.csvContent], 'feedback.csv', {
        type: 'text/csv;charset=utf-8;',
      })

      const shareData = {
        title: `Result exports ${new Date().toISOString()}`,
        text: 'Feedback :)',
        files: [file],
      }
      await navigator.share(shareData).catch(() => null)
    },
  },
}
</script>
