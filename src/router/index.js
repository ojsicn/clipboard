import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '@/components/Read.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Read',
    component: Read
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
