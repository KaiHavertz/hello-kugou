import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index.vue'
import Home from '@/components/home.vue'

import index_p from '@/components/index_p.vue'
import home_p from '@/components/home_p.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/index_p',
  name: 'index_p',
  component: index_p
}, {
  path: '/home_p',
  name: 'home_p',
  component: home_p
}, {
  path: '/',
  name: 'index',
  component: Index
}, {
  path: '/home',
  name: 'home',
  component: Home
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router