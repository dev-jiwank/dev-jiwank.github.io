import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue'
import project from '@/views/project.vue'
import lure from '@/views/lure/index.vue'

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
    path: '/project',
    name: 'project',
    component: project
  },
  {
    path: '/lure',
    name: 'lure',
    component: lure
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
