<template>
  <main>
    <button @click="counter.increment">Count</button>
    <p>Count is {{ counter.count }}</p>
    <p>Double count is {{doubleCount}}</p>
  </main>
</template>

<script setup>
  import { useCounterStore } from '@/stores/counter'
  import { storeToRefs } from 'pinia';
  const counter = useCounterStore()
  const { doubleCount } = storeToRefs(counter)
</script>