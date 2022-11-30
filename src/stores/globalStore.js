import { ref } from 'vue'
import { defineStore } from "pinia"

export const useGlobalStore = defineStore('global', () => {
  const isMobile = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))

  return { isMobile }
}) 