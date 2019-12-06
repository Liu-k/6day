import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path: 'default',
        name: 'default',
        component: () => import(/* webpackChunkName: "about" */ '../views/Default.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
