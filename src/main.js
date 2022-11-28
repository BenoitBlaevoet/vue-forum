import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000'


import App from './App.vue'
import router from './router'

import './assets/reset.css'
import './assets/base.css'

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')