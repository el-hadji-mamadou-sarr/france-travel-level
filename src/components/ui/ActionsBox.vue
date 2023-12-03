<template>
  <div
    v-if="isActionsBoxVisible"
    :style="{ top: `${mousePosition.y + 10}px`, left: `${mousePosition.x - 100}px` }"
    class="popover"
  >
    <!-- <v-list>
          <v-list-subheader>{{ dpt_name }}</v-list-subheader>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            :color="item.color"
            variant="tonal"
          >
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list> -->
    <div class="level-menu">
      <div>
        <div class="menu-header">{{ dpt?.dep_name }}</div>
        <div
          v-for="(item, i) in items.reverse()"
          :key="i"
          :value="item.title"
          :class="`level-${item.value}`"
          @click="handleSelect(item.value)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import type Departement from '@/utils/departement.interface'
import { items } from '@/utils/constantes'
import { userSelectedDepartements } from '@/stores/selectedDepartements'
const emit = defineEmits(['close_actions_box'])
const props = defineProps({
  isActionsBoxVisible: Boolean,
  mousePosition: Object,
  dpt: Object as () => Departement
})
const store = userSelectedDepartements()
const windowDim = reactive({
  width: window.innerWidth,
  height: window.innerHeight
})
watch(
  () => props.mousePosition,
  (val) => {
    if (val && val.x + 150 > windowDim.width) {
      val.x = val.x - 150
    }
    if (val && val.y + 300 > windowDim.height) {
      val.y = val.y - 50
    }
  }
)

const handleSelect = (value: number) => {
  console.log('value', value)
  store.addToStore(props.dpt.dep_name, value)
  document.getElementById(props.dpt?.num_dep)?.setAttribute('fill', items.reverse()[value].color)
  emit('close_actions_box')
}
</script>

<style scoped>
.popover {
  position: fixed;
  min-width: 150px;
  /* border: 1px solid #ccc; */
  /* padding: 10px; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  z-index: 1000;
}

.level-menu {
  background-color: white;
  width: 200px;
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  border-color: black;
  text-indent: 10px;
  z-index: 1000;
}

.menu-header {
  font-weight: bold;
}

.menu-header:hover {
  cursor: pointer;
}

.menu-header,
.level-5,
.level-4,
.level-3,
.level-2,
.level-1 {
  display: flex;
  min-height: 25px;
  align-items: center;
}

.level-1:hover {
  cursor: pointer;
  background-color: #800080;
}

.level-0 {
  display: flex;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  min-height: 25px;
  align-items: center;
}

.level-0:hover {
  cursor: pointer;
  background-color: #74b4ff;
}

.level-5:hover {
  cursor: pointer;
  background-color: #e84c3d;
}

.level-4:hover {
  cursor: pointer;
  background-color: #d58337;
}

.level-3:hover {
  cursor: pointer;
  background-color: #f3c218;
}

.level-2:hover {
  cursor: pointer;
  background-color: #30cc70;
}
</style>
