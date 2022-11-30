<template>
  <Transition name="slide-fade" >
  <nav v-if="!drawer.isHidden || drawer.documentWidth > 768 "
    id="navigation-drawer"
    class="
    flex flex-col align-center
    absolute md:relative
    h-screen md:h-fit w-full md:w-48  
    left-0 top-0 right-0 bottom-0
    pt-24 md:pt-2 md:mt-2
    bg-white
    z-40 md:z-auto"
  >
  <slot></slot>
  
  </nav>
</Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>

<script setup>
  import { useDrawerStore } from '@/stores/drawerStore'
  const drawer = useDrawerStore()
  window.addEventListener('resize', ()=>{
    drawer.documentWidth = window.innerWidth 
  })
</script>