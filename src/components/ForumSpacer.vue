<template>

  <hr v-if="!props.Trimmed && !props.Text && !props.Square" class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">

  <hr v-else-if="props.Trimmed" class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700">

  <hr v-else-if="props.Square" class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700">
  <div v-else-if="props.Text" class="inline-flex justify-center items-center w-full">
    <hr class="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700">
    <span class="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900"><slot>or</slot></span>
  </div>

</template>

<script setup>
  const props = defineProps({
    Trimmed: Boolean,
    Square: Boolean,
    Text: Boolean,
  })
</script>

<style lang="scss" scoped>

</style>