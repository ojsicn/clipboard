import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '@/components/Read.vue'
import Create from '@/components/Create.vue'
import Detail from '@/components/Detail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Read',
    component: Read
  },
  {
    path: '/create/:contentId?', // path params를 넣은 후부터는 param값이 전달되지 않으면 빈 컴포넌트가 뜬다. 이럴경우 query params를 넣는다.
    name: 'Create',
    component: Create
  },
  {
    path: '/detail/:contentId',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
