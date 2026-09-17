import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/programmes',
      name: 'programmes',
      component: () => import('../views/ProgrammesView.vue'),
    },
    {
      path: '/programmes/:slug',
      name: 'programme-detail',
      component: () => import('../views/ProgrammeDetailView.vue'),
    },
  ],
  // Smooth-scroll to #hash targets (e.g. /#programmes) and reset on page change.
  // The 190ms delay lets the App.vue page fade-out (180ms) finish first, so the
  // new view enters already scrolled to the right spot instead of jumping.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    const LEAVE_MS = 190
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, behavior: 'smooth' }), LEAVE_MS)
      })
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), LEAVE_MS)
    })
  },
})

export default router
