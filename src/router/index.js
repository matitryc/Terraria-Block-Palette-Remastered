import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      savePosition: true
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('@/pages/Team.vue'),
    meta: {
      toTop: true
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    scroll.top = 0
    scroll.behavior = 'smooth'
    return scroll
  }
})

export default router