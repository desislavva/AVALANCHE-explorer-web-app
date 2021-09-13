import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Xchain from '../pages/X-chain.vue'
import Pchain from '../pages/P-chain.vue'
import Cchain from '../pages/C-chain.vue'
import Block from '../pages/Block.vue'
import Transaction from '../pages/Transaction.vue'
import Address from '../pages/Address.vue'

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

  },
  {
    path: '/block',
    name: 'Block',
    component: Block

  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction

  },
  {
    path: '/address',
    name: 'Address',
    component: Address

  }


]

const router = new VueRouter({
  routes
})

export default router
