import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import localeSetup from './shared/infrastructures/configs/locale/locale.config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(localeSetup)

app.mount('#app')
