<template>
  <div
    v-if="isPopoverVisible"
    :style="{ top: `${mousePosition.y + 10}px`, left: `${mousePosition.x + 10}px` }"
    class="popover"
  >
    <v-card class="mx-auto" max-width="344" hover>
      <v-card-item>
        <v-card-title>{{ dpt?.dep_name }} </v-card-title>
        <v-card-subtitle> {{ dpt?.num_dep }} </v-card-subtitle>
        <v-card-subtitle> {{ dpt?.region_name }} </v-card-subtitle>
      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue'
import type Departement from '@/utils/departement.interface'
const props = defineProps({
  isPopoverVisible: Boolean,
  mousePosition: Object,
  dpt: Object as () => Departement
})
const windowDim = reactive({
  width: window.innerWidth,
  height: window.innerHeight
})

watch(
  () => props.mousePosition,
  (val) => {
    if (val && val.x + 150 > windowDim.width) {
      val.x = val.x - 100
    }
    if (val && val.y + 150 > windowDim.height) {
      val.y = val.y - 100
    }
  }
)
</script>

<style scoped>
.popover {
  position: fixed;
  background-color: #fff;
  min-width: 150px;
  /* border: 1px solid #ccc; */
  /* padding: 10px; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  z-index: 1000;
}
</style>
