import Components from './components'
import type { App, Plugin } from 'vue'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: any): any => {
    components.forEach((c) => app.use(c))
  }

  return {
    install,
  }
}

export default makeInstaller(Components)
