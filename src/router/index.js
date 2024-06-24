import { createRouter, createWebHashHistory } from 'vue-router'

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
  history: createWebHashHistory(process.env.VUE_APP_ROUTER),
  routes
})

export default router
