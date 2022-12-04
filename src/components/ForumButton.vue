<template>
  <button
    class="
      py-2 px-6
      rounded shadow-sm c:shadow-inner
      shadow-slate-600 dark:shadow-slate-900
      focus-visible:outline-2 focus-visible:outline focus-visible:outline-blue-400
      active:translate-y-px
      text-white
      
    "
    :class="{
      'bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-800 dark:bg-blue-900': !props.secondary,
      'bg-pink-500 hover:bg-pink-600 dark:hover:bg-fuchsia-800 dark:bg-fuchsia-900': props.secondary ,
    }">
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    secondary:{
      type: Boolean,
      default: false
    },
  })

</script>

<style scoped>
</style>