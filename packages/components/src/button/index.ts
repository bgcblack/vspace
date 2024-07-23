import _Button from './src/button.vue'
import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  const c = comp as SFCWithInstall<T>
  c.install = (app: App) => {
    const name = (comp as any).name
    if (name) {
      app.component(name, comp as any)
    }
  }
  return c
}

export const Button = withInstall(_Button)
export default Button
