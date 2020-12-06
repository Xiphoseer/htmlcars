import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import resize from 'vue-resize-directive'
import App from './App.vue'
import router from './router'

import ComponentLibrary from './index';

Vue.config.productionTip = false
Vue.use(VueHighlightJS)
Vue.use(ComponentLibrary)

Vue.directive('resize', resize);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
