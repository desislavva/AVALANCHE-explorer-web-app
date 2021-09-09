import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Xchain from '../pages/X-chain.vue'
import Pchain from '../pages/P-chain.vue'
import Cchain from '../pages/C-chain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/x-chain',
    name: 'X-chain',
    component: Xchain 

  },
  {
    path: '/c-chain',
    name: 'C-chain',
    component: Cchain 

  },
  {
    path: '/p-chain',
    name: 'P-chain',
    component: Pchain 

  }
]

const router = new VueRouter({
  routes
})

export default router
