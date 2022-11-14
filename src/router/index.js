import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/synonym',
      name: 'synonym',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SynonymView.vue')
    },
    {
      path: '/antonym',
      name: 'antonym',
      component: () => import('../views/AntonymView.vue')
    },
    {
      path: '/rhyme',
      name: 'rhyme',
      component: () => import('../views/RhymeView.vue')
    },
    {
      path: '/homophone',
      name: 'homophone',
      component: () => import('../views/HomophoneView.vue')
    }
  ]
})

export default router
