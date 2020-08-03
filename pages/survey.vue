<template>
  <div>
    {{ $t('survey.title') }}

    <!-- Question: Satisfaction -->
    <button
      v-for="option of satisfactionOptions"
      :key="option"
      @click="storeSatisfaction(option)"
    >
      {{ $t(`survey.questions.satisfaction.options.${option}`) }}
    </button>

    <p v-if="satisfaction">
      {{ $t('survey.questions.satisfaction.label') }}:
      {{ $t(`survey.questions.satisfaction.options.${satisfaction}`) }}
    </p>

    <button v-if="satisfaction" @click="complete">
      {{ $t('survey.submitButton') }}
    </button>
  </div>
</template>

<script>
import { set } from 'idb-keyval'

export default {
  name: 'SurveyPage',
  data() {
    return {
      satisfaction: null,
      satisfactionOptions: ['good', 'bad'],
      startTime: new Date(),
    }
  },
  computed: {
    resultContext() {
      return {
        language: this.$i18n.locale,
        location: null /* to be implemented */,
      }
    },
  },
  methods: {
    storeSatisfaction(satisfaction) {
      this.satisfaction = satisfaction
    },
    async complete() {
      await set(this.startTime.toISOString(), {
        satisfaction: this.satisfaction,
        ...this.resultContext,
      })
      this.reset()
    },
    reset() {
      this.startTime = new Date()
    },
  },
}
</script>
