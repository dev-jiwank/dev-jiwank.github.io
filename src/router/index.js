import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue'
import project from '@/views/project.vue'
import lure from '@/views/lure/index.vue'
import feargreed from '@/views/feargreed/index.vue'
import soccer from '@/views/score/index.vue'
import pok from '@/views/pokemon/index.vue'
import pokinit from '@/views/pokemon/pokinit.vue'
import projectcard from '@/views/projectcard.vue'
import test from '@/views/mechawar/index.vue'
import growing from '@/views/copy/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  // {
  //   path: '/project',
  //   name: 'project',
  //   component: project
  // },
  {
    path: '/lure',
    name: 'lure',
    component: lure
  },
  {
    path: '/project/fear-and-greed',
    name: 'fear-and-greed',
    component: feargreed
  },
  {
    path: '/project/soccer',
    name: 'soccer',
    component: soccer
  },
  {
    path: '/project/pok',
    name: 'pok',
    component: pok
  },
  {
    path: '/project/pok',
    name: 'pokinit',
    component: pokinit
  },
  {
    path: '/project',
    name: 'project',
    component: projectcard
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: test
  // },
  {
    path: '/growing',
    name: 'growing',
    component: growing
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
