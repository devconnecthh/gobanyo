<template>
  <div class="container">
    <div>
      <ul>
        <li v-for="(mood, index) of MOODS" :key="index">
          {{ mood }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MOODS } from '~/config/moods'

export default {
  data() {
    return {
      MOODS
    }
  }
}
</script>
