import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/13',
    name: '13',
    component: () => import('../views/13类.vue')
  },
  {
    path: '/14',
    name: '14',
    component: () => import('../views/14構造函數.vue')
  },
  {
    path: '/15',
    name: '15',
    component: () => import('../views/15繼承.vue')
  },
  {
    path: '/17',
    name: '17',
    component: () => import('../views/17抽象class.vue')
  },
  {
    path: '/18',
    name: '18',
    component: () => import('../views/18接口.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
