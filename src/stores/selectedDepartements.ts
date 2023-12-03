import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type Departement from '@/utils/departement.interface'

export const userSelectedDepartements = defineStore('departements', () => {
  const dptStore = ref<store[]>([])
  //   const doubleCount = computed(() => count.value * 2)
  function addToStore(dpt_name: string, value: number) {
    if (dptStore.value.find((dpt) => dpt.dpt_name === dpt_name)) {
      dptStore.value = dptStore.value.filter((dpt) => dpt.dpt_name !== dpt_name)
    }
    dptStore.value = [...(dptStore.value || []), { dpt_name, value }]
  }

  return { dptStore, addToStore }
})

interface store {
  dpt_name: string
  value: number
}
