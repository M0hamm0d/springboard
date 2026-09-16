import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { reveal } from './directives/reveal'
import { countUp } from './directives/countUp'

const app = createApp(App)

app.directive('reveal', reveal)
app.directive('count-up', countUp)

app.use(createPinia())
app.use(router)

app.mount('#app')
