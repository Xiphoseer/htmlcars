import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/docs/Index.vue'
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
          component: () => import(/* webpackChunkName: "doc-imprint" */ './views/docs/Imprint.vue')
        },
        {
          path: '/roadmap',
          name: 'roadmap',
          component: () => import(/* webpackChunkName: "doc-roadmap" */ './views/docs/Roadmap.vue')
        },
        {
          path: '/colors',
          name: 'colors',
          component: () => import(/* webpackChunkName: "doc-colors" */ './views/docs/Colors.vue')
        },
        {
          path: '/elements',
          name: 'elements',
          component: () => import(/* webpackChunkName: "doc-elements" */ './views/docs/Elements.vue')
        },
        {
          path: '/chrome',
          name: 'chrome',
          component: () => import(/* webpackChunkName: "doc-chrome" */ './views/docs/Chrome.vue')
        },
        {
          path: '/components',
          name: 'components',
          component: () => import(/* webpackChunkName: "doc-components" */ './views/docs/Components.vue')
        },
        {
          path: '/layouts',
          name: 'layouts',
          component: () => import(/* webpackChunkName: "doc-layouts" */ './views/docs/Layouts.vue')
        }
      ]
    },
    {
      path: "/examples/403",
      name: 'access-denied',
      component: () => import(/* webpackChunkName: "example-403" */ './views/examples/AccessDenied.vue')
    },
    {
      path: "/examples/calculator",
      name: 'calculator',
      component: () => import(/* webpackChunkName: "example-calculator" */ './views/examples/Calculator.vue')
    },
    {
      path: "/examples/lcarscom",
      name: 'lcarscom',
      component: () => import(/* webpackChunkName: "example-lcarscom" */ './views/examples/LcarscomDatabase.vue')
    },
    {
      path: "/examples/panel",
      name: 'panel',
      component: () => import(/* webpackChunkName: "example-panel" */ './views/examples/Panel.vue')
    },
    {
      path: "/examples/access",
      name: 'access',
      component: () => import(/* webpackChunkName: "example-access" */ './views/examples/AccessControl.vue')
    },
    {
      path: "/examples/2048",
      name: 'game2048',
      component: () => import(/* webpackChunkName: "example-2048" */ './views/examples/Game2048.vue')
    },
    {
      path: "/examples/gutter",
      name: 'gutter',
      component: () => import(/* webpackChunkName: "example-gutter" */ './views/examples/Gutter.vue')
    }
  ]
})
