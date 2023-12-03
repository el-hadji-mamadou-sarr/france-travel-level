<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { openDB } from './services/indexDB'
import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  openDB()
})
</script>

<template>
  <RouterView />
</template>
