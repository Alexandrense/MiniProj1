import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/WorkView.vue')
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: () => import('../views/HobbiesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
