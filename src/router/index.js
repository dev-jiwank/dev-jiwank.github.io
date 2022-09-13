import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue'
import practice from '@/views/parctice.vue'

const routes = [
  {
    path: '',
    name: '',
    component: Main
  },
  {
    path: '/home',
    name: 'home',
    component: Main
  },
  {
    path: '/parctice',
    name: 'parctice',
    component: practice
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
