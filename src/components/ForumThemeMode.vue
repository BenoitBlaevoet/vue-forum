<template>
  <div class="p-4">
    <ForumSpacer Text>
      <p>
        <font-awesome-icon icon="fa-solid fa-display" />
        Display options
      </p>
    </ForumSpacer>
  </div>
  <ul class="px-4 text-sm space-y-2">
    <li class="flex gap-4 items-center">
        <label for="default-checkbox" class="">Use system preference</label>
        <input id="default-checkbox" v-model="isSystem"  @click="updateSysPref()"  type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    </li>
    <li class="flex gap-4">
      <span class="">Dark Themes</span>
      <label class="inline-flex relative items-center cursor-pointer">
        <input id="themeToggle" type="checkbox" :checked="isDark" :value="isDark" v-model="isDark" @click="updateTheme()" class="sr-only peer" :disabled="isSystem">
        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </li>
  </ul>
</template>

<script setup>
import {ref} from 'vue'
import { useThemeStore } from '@/stores/themeStore'
const theme = useThemeStore()
let isDark = ref(theme.getThemePref())
let isSystem = ref(theme.getSystemPref())

function updateSysPref(){
  theme.toggleSystemPref()
  theme.updateDom()
  const themeToggle = document.getElementById("themeToggle")
  theme.getSystemPref()? themeToggle.disabled = true : themeToggle.disabled = false;
  isDark.value = theme.getThemePref()
}

function updateTheme () {
  if(theme.getSystemPref())return
  theme.toggleTheme()
  theme.updateDom()
}
</script>

<style lang="scss" scoped>

</style>