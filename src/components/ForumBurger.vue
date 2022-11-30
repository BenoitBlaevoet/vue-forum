<template>
  <button class="w-14 h-14 relative focus:outline-none self-center ml-auto" :class="{'justify-self-end':props.flexEnd}" @click="drawer.isHidden=!drawer.isHidden">
    <div class="block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2 z-50" >
      <span  class="block absolute h-0.5 w-7 text-gray-600 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': !drawer.isHidden,' -translate-y-1.5': drawer.isHidden }"></span>
      <span  class="block absolute  h-0.5 w-5 text-gray-600 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': !drawer.isHidden } "></span>
      <span  class="block absolute  h-0.5 w-7 text-gray-600 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': !drawer.isHidden, ' translate-y-1.5': drawer.isHidden}"></span>
    </div>
  </button> 
</template>

<script setup>
import { useDrawerStore } from '@/stores/drawerStore'
const drawer = useDrawerStore()
const props = defineProps({
  flexEnd: Boolean
})
</script>