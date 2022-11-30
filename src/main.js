import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000'


import App from './App.vue'
import router from './router'

import ForumSearch from './components/ForumSearch.vue'
import ForumList from './components/ForumList.vue'
import ForumSpacer from './components/ForumSpacer.vue';

import './style.css'

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)
const app = createApp(App)

app
  .component('ForumSearch', ForumSearch)
  .component('ForumList', ForumList)
  .component('ForumSpacer', ForumSpacer)

app.use(pinia)
app.use(router)

app.mount('#app')