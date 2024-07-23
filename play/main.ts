import { createApp } from 'vue'
import App from './app.vue'
import vspace from '@vspace/components'

const app = createApp(App)
app.use(vspace)
app.mount('#app')
