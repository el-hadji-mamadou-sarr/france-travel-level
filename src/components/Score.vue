<template>
  <div class="score-page">
    <div class="score">
      <span>Ton level de voyageur</span>
      <span>{{ score }}</span>
    </div>
    <div class="levels">
      <div v-for="(item, i) in items" :key="i" :value="item.title" class="level-elt">
        <div class="level-title">
          <div :class="`level-box-${item.value}`"></div>
          <div>
            {{ item.title }}
          </div>
        </div>
        <div>{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { items } from '@/utils/constantes'
const props = defineProps({
  score: Number
})
</script>

<style scoped>
.levels {
  padding: 1rem;
  border-radius: 10px;
  border-width: 5px;
  border-style: solid;
}
.level-elt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  gap: 5rem;
  font-size: 1.5rem;
  font-weight: semibold;
}
.level-title {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: semibold;
  margin: 0.2rem 0 0.2rem 0;
}

.score-page {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100vh;
}
.score {
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 2rem 0;
  gap: 1rem;
}

.level-box-0 {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #74b4ff;
  border-width: 1px;
  border-style: solid;
}

.level-box-5 {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #e84c3d;
  border-width: 1px;
  border-style: solid;
}

.level-box-4 {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #d58337;
  border-width: 1px;
  border-style: solid;
}

.level-box-3 {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #f3c218;
  border-width: 1px;
  border-style: solid;
}

.level-box-2 {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #30cc70;
  border-width: 1px;
  border-style: solid;
}
.level-box-1 {
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #800080;
  border-width: 1px;
  border-style: solid;
}
</style>
