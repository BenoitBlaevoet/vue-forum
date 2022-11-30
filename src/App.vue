<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ForumHeader from './components/ForumHeader.vue'
import ForumLogo from './components/ForumLogo.vue'
import ForumBurger from './components/ForumBurger.vue'

import { useDrawerStore } from '@/stores/drawerStore'
const drawer = useDrawerStore()
</script>

<template>
  <ForumHeader>
    <RouterLink :to="{name:'home'}"><ForumLogo/></RouterLink>
    <ForumBurger flexEnd class="md:hidden"/>
  </ForumHeader>
  <main class="md:grid md:grid-cols-3">
  <RouterView />
  </main>
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
main{
  padding-top: 2rem;
}
</style>
