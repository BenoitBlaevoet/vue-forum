<template>
  <ul class="text-center" v-bind:class="{'list-none': !props.Disc && ! props.Decimal ,'list-disc': props.Disc, 'list-decimal': props.Decimal}">
    <slot></slot>
  </ul>
</template>

<script setup>
  const props = defineProps({
    Disc: Boolean,
    Decimal: Boolean,
    })
</script>

<style scoped>

</style>