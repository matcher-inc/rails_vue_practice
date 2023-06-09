import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '@/views/TopPage'
import SamplePage from '@/views/SamplePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
  {
    path: '/sample',
    name: 'SamplePage',
    component: SamplePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
