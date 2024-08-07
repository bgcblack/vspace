import { createApp } from 'vue'
import App from './app.vue'
import { default as vspace } from '@vspace/components'

const app = createApp(App)
app.use(vspace as any, {})
app.mount('#app')
