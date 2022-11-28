<template cols="auto" bgcolor="red">
  <div class="vHeader-item">

  </div>
</template>
<script setup>
import { computed } from 'vue';

  const props = defineProps([
    'cols',
    'bgcolor',
    'colspan'
  ])
  const emits = defineEmits({
    'cols': '2',
    'bgcolor': 'red'
  })

  const style = computed(() => {
    return {
      '--cols': 'span '+props.cols,
      'bigcolor' : 'green',
      'colspan' : 'colspan-'+props.cols
    }})
  console.log(style)
  console.log(style.value.bigcolor)
</script>
<style>
.vHeader-item{
  grid-column: span v-bind(props.cols);
  background-color: v-bind(props.bgcolor);
  }
</style>