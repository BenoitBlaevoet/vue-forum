<script setup>
import { RouterLink, RouterView } from 'vue-router'
import vHeader from './components/vHeader.vue'
import vHeaderItem from './components/vHeaderItem.vue';
</script>

<template>
  <vHeader>
    <vHeaderItem bgcolor="red" cols="5"></vHeaderItem>
  </vHeader>

  <RouterView />
</template>

<style>
:root{
  --primary: #019be5;
  --primary-light:#63ccff;
  --primary-dark:#006db3;
  --secondary:#84ffff;
  --secondary-light:#baffff;
  --secondary-dark:#4bcbcc;
  --text-color: black;
  --text-color-light: white;
}

.bg-p{
  background-color: var(--primary);
}
.bg-pl{
  background-color: var(--primary-light);
}
.bg-pd{
  background-color: var(--primary-dark);
}
.bg-s{
  background-color: var(--secondary);
}
.bg-sl{
  background-color: var(--secondary-light);
}
.bg-sd{
  background-color: var(--secondary-dark);
}
</style>
