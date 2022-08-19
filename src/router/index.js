import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Jiwan from '@/views/jiwan.vue'
import Login from '@/views/login.vue'

const routes = [
  {
    path: '',
    name: '',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/jiwan',
    name: 'jiwan',
    component: Jiwan
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
