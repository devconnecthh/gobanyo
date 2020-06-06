<template>
  <div>{{ dbContent }}</div>
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
  data() {
    return { dbContent: {} }
  },
  mounted() {
    this.loadContent()
  },
  methods: {
    async loadContent() {
      this.dbContent = await getDbContent()
    }
  }
}
</script>
