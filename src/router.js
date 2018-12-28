import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Docs from './views/Docs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Docs,
      children: [
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
    },
    {
      path: "/examples/403",
      name: 'access-denied',
      component: () => import(/* webpackChunkName: "403" */ './components/AccessDenied.vue')
    },
    {
      path: "/examples/calculator",
      name: 'calculator',
      component: () => import(/* webpackChunkName: "calculator" */ './components/Calculator.vue')
    },
    {
      path: "/examples/lcarscom",
      name: 'lcarscom',
      component: () => import(/* webpackChunkName: "lcarscom" */ './components/LcarscomDatabase.vue')
    },
    {
      path: "/examples/panel",
      name: 'panel',
      component: () => import(/* webpackChunkName: "panel" */ './components/Panel.vue')
    },
    {
      path: "/examples/access",
      name: 'access',
      component: () => import(/* webpackChunkName: "access" */ './components/AccessControl.vue')
    }
  ]
})
