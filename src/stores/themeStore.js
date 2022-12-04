import { ref } from 'vue'
import { defineStore } from "pinia"

export const useThemeStore = defineStore('theme', () => {

  const updateDom = () => {
    const app = document.querySelector("html")
    getThemePref()?
      app.classList.add('dark'):
      app.classList.remove('dark')
  }

  const getThemePref = () => {
    return (( !systemPreference.value  && themePreference.value) ||( systemPreference.value && window.matchMedia('(prefers-color-scheme: dark)').matches))
  }
  
  const getSystemPref = () => {
    return systemPreference.value
  }

  const toggleSystemPref = () => {
    systemPreference.value = !systemPreference.value
    systemPreference.value ? localStorage.setItem('sysPref', 'system' ) : localStorage.setItem('sysPref', 'custom' )
  }
  const toggleTheme = () => {
    themePreference.value = !themePreference.value
    localStorage.theme==='dark'?localStorage.setItem('theme', 'light'):localStorage.setItem('theme', 'dark')
  }

  const themePreference = ref( false )
  const systemPreference = ref( false )

  if(localStorage.theme=='dark')themePreference.value=true
  if(localStorage.sysPref=='system')systemPreference.value=true







  return { getThemePref, getSystemPref, updateDom, toggleTheme, toggleSystemPref  }
}) 