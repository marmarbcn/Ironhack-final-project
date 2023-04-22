import { createRouter, createWebHistory } from 'vue-router'
//components
import AuthView from '@/views/AuthView.vue'
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView,
    children: [
      {
        path: 'auth/signin',
        name: 'signIn',
        component: SignInView //vista dinámica
      },
      {
        path: 'auth/signup',
        name: 'signUp',
        component: () => import('@/views/SignUpView.vue')
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
