<template>
  <div>
    <div>
      {{ $t('welcome') }}
      <ul :class="$style.moods">
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

<style module lang="scss">
.moods {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  font-size: 130px;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0.5rem;
    list-style: none;
    cursor: pointer;
  }
}
</style>
