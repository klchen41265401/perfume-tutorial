import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/chapter/1',
    name: 'Chapter1',
    component: () => import('../views/Chapter1View.vue')
  },
  {
    path: '/chapter/2',
    name: 'Chapter2',
    component: () => import('../views/Chapter2View.vue')
  },
  {
    path: '/chapter/3',
    name: 'Chapter3',
    component: () => import('../views/Chapter3View.vue')
  },
  {
    path: '/chapter/4',
    name: 'Chapter4',
    component: () => import('../views/Chapter4View.vue')
  },
  {
    path: '/chapter/5',
    name: 'Chapter5',
    component: () => import('../views/Chapter5View.vue')
  },
  {
    path: '/chapter/6',
    name: 'Chapter6',
    component: () => import('../views/Chapter6View.vue')
  },
  {
    path: '/chapter/7',
    name: 'Chapter7',
    component: () => import('../views/Chapter7View.vue')
  },
  {
    path: '/chapter/8',
    name: 'Chapter8',
    component: () => import('../views/Chapter8View.vue')
  },
  {
    path: '/chapter/9',
    name: 'Chapter9',
    component: () => import('../views/Chapter9View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 70, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
