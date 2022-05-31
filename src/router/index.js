import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostView from '../views/PostView.vue'
import PostDetailView from '../views/PostDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/posts',
      name: 'posts',
      // component: () => import('../views/PostView.vue')
      component: PostView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      // component: () => import('../views/PostDetailView.vue')
      component: PostDetailView
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    }
  ]
})

export default router
