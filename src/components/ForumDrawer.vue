<template>
  <Transition name="slide-fade" >
  <nav v-if="!drawer.isHidden || drawer.documentWidth >= 768 "
    id="navigation-drawer"
    class="
    flex flex-col align-center
    absolute md:relative
    bg-white dark:bg-slate-800
    h-screen md:h-fit w-full
    left-0 top-0 right-0 bottom-0
    pt-24 md:pt-2 md:mt-2
    2xl:pl-12 xl:pl-9 lg:pl-6
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