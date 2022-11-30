<template>
  <div class="forumCard">
    <h3>{{ props.title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  }
})

</script>

<style lang="scss" scoped>

</style>