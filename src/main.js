import { createApp } from 'vue'
import './style.css'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})
createApp(App).use(vuetify).use(router).mount('#app')
