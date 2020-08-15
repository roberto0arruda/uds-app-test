import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

import Pedidos from '@/views/Pedidos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listar-pedidos',
    component: Pedidos,
    name: 'pedidos'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
