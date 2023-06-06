import { ref } from 'vue'
import { defineStore } from 'pinia'
import colors from '@/assets/data/colors'
import type { Color } from '@/types'

export const useAppStore = defineStore('app', () => {
  const colorList = ref<Color[]>(colors)

  return {
    colorList,
  }
})
