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
export default {
  name: 'SurveyPage',
  data() {
    return {
      satisfaction: null
    }
  },
  methods: {
    good() {
      this.satisfaction = 'good'
    },
    bad() {
      this.satisfaction = 'bad'
    },
    complete() {
      console.log('Done: ', this.satisfaction)
    }
  }
}
</script>
