<script setup lang="ts">
import Score from '@/components/Score.vue'
import Map from '../components/Map.vue'
import { computed, ref, watch } from 'vue'
import { userSelectedDepartements } from '@/stores/selectedDepartements'

const store = userSelectedDepartements()
const score = ref(0)
watch(
  () => store.score,
  (val) => {
    score.value = val
  }
)
// const score = store.score
// console.log('score', score)
</script>

<template>
  <main class="main">
    <Map :width="1000" :height="900" />
    <Score :score="score" />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: between;
}
</style>
