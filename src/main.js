import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
import axios from 'axios'
//vuetify
// import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000'


import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus, faArrowDown, faArrowUp, faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faComment, faLightbulb } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faPlus, faArrowUp, faArrowDown, faComment, faLightbulb, faDisplay)

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
  .component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')