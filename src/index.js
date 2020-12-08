import * as components from './components'
import colors from './color'
import themes from './themes';

import './assets/sass/lcars.scss';

const ComponentLibrary = {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  },
  colors: colors,
  themes: themes,
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}