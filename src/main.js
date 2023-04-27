import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

pinia.use(piniaPersist)

new Granim({
  element: '#canvas-basic',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        // ['#f79ca8', '#e098c6'],
        // ['#0f95ed', '#f19cf7']
        ['#cec2ff', '#dcb6d5'],

        ['#f79ca8', '#e098c6'],
        ['#b3b3f1', '#cf8ba9']
      ]
    }
  }
})
