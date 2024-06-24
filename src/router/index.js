import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/testReport',
    children: [
      {
        path: '/testReport',
        name: 'testReport',
        component: () => import('../pages/testReport.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
