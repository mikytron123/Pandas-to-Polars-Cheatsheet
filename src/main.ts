import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


hljs.registerLanguage('python', python);

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
