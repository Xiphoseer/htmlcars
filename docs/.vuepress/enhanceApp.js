import VueHighlightJS from 'vue-highlightjs';
import ComponentLibrary from './../../src/index.js'
import './../../src/assets/sass/lcars.scss';

export default ({ Vue, options, router, siteData }) => {
  Vue.use(ComponentLibrary);
  Vue.use(VueHighlightJS);
}
