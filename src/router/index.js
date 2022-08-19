import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Jiwan from '@/views/Jiwan.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/jiwan',
    name: 'jiwan',
    component: Jiwan
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
