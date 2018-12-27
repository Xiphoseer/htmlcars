import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "imprint" */ './views/Imprint.vue')
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import(/* webpackChunkName: "colors" */ './views/Colors.vue')
    },
    {
      path: '/elements',
      name: 'elements',
      component: () => import(/* webpackChunkName: "elements" */ './views/Elements.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import(/* webpackChunkName: "components" */ './views/Components.vue')
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: () => import(/* webpackChunkName: "layouts" */ './views/Layouts.vue')
    }
  ]
})
