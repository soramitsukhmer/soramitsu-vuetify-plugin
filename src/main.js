import * as components from './components'

const SoramitsuVuetifyPlugin = {
  installed: false,
  install (Vue, options = {}) {
    if (this.installed) return
    this.installed = true

    // register components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default SoramitsuVuetifyPlugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SoramitsuVuetifyPlugin)
}
