import type { App, Plugin } from 'vue'
import Components from './components'

export function makeInstaller(components: Plugin[] = []): Plugin {
  const install = (app: App): any => {
    components.forEach(c => app.use(c))
  }

  return {
    install,
  }
}

export default makeInstaller(Components)
