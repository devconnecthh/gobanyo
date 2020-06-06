<template>
  <div>
    Survey
    <button @click="good">Good</button>
    <button @click="bad">Bad</button>
    <p>Satisfaction: {{ satisfaction }}</p>
    <button v-if="satisfaction" @click="complete">Complete</button>
  </div>
</template>

<script>
import { set } from 'idb-keyval'

export default {
  name: 'SurveyPage',
  data() {
    return {
      satisfaction: null,
      startTime: new Date()
    }
  },
  methods: {
    good() {
      this.satisfaction = 'good'
    },
    bad() {
      this.satisfaction = 'bad'
    },
    async complete() {
      await set(this.startTime.toISOString(), {
        satisfaction: this.satisfaction
      })
      this.reset()
    },
    reset() {
      this.startTime = new Date()
    }
  }
}
</script>
