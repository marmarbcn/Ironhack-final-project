import { createRouter, createWebHistory } from 'vue-router'
//components
import AuthView from '@/views/AuthView.vue'
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    children: [
      {
        path: 'signin',
        name: 'signIn',
        component: SignInView
      },
      {
        path: 'signup',
        name: 'signUp',
        component: SignUpView
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requireAuth: true }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
