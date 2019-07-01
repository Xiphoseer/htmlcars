import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import resize from 'vue-resize-directive'
import App from './App.vue'
import router from './router'

import RadioButton from '@/components/buttons/Radio.vue';
import ToggleButton from '@/components/buttons/Toggle.vue';
import CheckButton from '@/components/buttons/Check.vue';
import GridLayout from '@/components/layouts/GridLayout.vue';

import Clock from '@/components/widgets/Clock.vue';
import Stardate from '@/components/widgets/Stardate.vue';

import Calculator from '@/components/widgets/Calculator.vue';
Vue.config.productionTip = false
Vue.use(VueHighlightJS)

Vue.component('lcars-radio', RadioButton);
Vue.component('lcars-toggle', ToggleButton);
Vue.component('lcars-check', CheckButton);
Vue.component('lcars-grid-layout', GridLayout);

Vue.component('lcars-clock', Clock);
Vue.component('lcars-stardate', Stardate);
Vue.component('lcars-calculator', Calculator);

Vue.directive('resize', resize);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
