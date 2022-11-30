import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getWidth } from '../helpers/documentSize'

export const useDrawerStore = defineStore('drawer', () => {
  const isHidden = ref(true)
  const isMobile = ref(false)
  let documentWidth = ref(getWidth())
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))isMobile.value=true
  if(documentWidth.value < 768 )isMobile.value=true
  if(!isMobile.value)isHidden.value=false
  return { isHidden, isMobile, documentWidth }
})
