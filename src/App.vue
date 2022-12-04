<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ForumHeader from './components/ForumHeader.vue'
import ForumLogo from './components/ForumLogo.vue'
import ForumBurger from './components/ForumBurger.vue'

// Allow us to init the dark theme is it's registered in the user preference
import { useThemeStore } from '@/stores/themeStore'
const theme = useThemeStore()
theme.updateDom()

</script>

<template >
    <ForumHeader>
      <RouterLink :to="{name:'home'}"><ForumLogo/></RouterLink>
      <RouterLink :to="{name:'login'}" class="ml-auto self-center">Login</RouterLink>
      <ForumBurger flexEnd class="md:hidden"/>
    </ForumHeader>
    <main 
      class="  z-0
        md:grid md:grid-cols-12 md:gap-4
        
      "
    >
      <RouterView />
    </main>
</template>

<style>
html.dark{
  color-scheme: dark;
}
</style>
