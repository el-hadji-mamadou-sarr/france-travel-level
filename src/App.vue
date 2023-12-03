<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { openDB } from './services/indexDB'
import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  openDB()
})
</script>

<template>
  <RouterView />
</template>
