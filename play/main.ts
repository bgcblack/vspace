import { createApp } from 'vue'
import vspace from '@vspace/components'
import App from './app.vue'

const app = createApp(App)
app.use(vspace as any, {})
app.mount('#app')
