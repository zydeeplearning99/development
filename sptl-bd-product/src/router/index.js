import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: ''
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
    meta: {
      title: '核心产品'
    }
  },
  {
    path: '/dataos',
    name: 'dataos',
    component: Product,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
    meta: {
      title: 'DATAOS'
    }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video.vue'),
    meta: {
      title: '资料中心'
    }
  },
  {
    path: '/doc',
    name: 'Doc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Doc.vue'),
    meta: {
      title: '资料中心'
    }
  },{
    path: '/app/:id',
    name: 'App',
    component: () => import(/* webpackChunkName: "about" */ '../views/App.vue'),
    meta: {
      title: '行业应用'
    }
  },
  {
    path: '/docView/:id',
    name: 'DocView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DocView.vue'),
    meta: {
      title: '资料中心'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title && to.meta.title !== '' ? 'AISWare BigData-' + to.meta.title : 'AISWare BigData'
  next()
})
export default router
