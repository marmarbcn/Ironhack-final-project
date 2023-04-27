import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
//components
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import DashboardView from '@/views/DashboardView.vue'
import TasksView from '@/views/TasksView.vue'
import Account from '@/components/Account.vue'

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUpView
  },

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requireAuth: true },
    children: [
      {
        path: 'account',
        name: 'account',
        component: Account,
        meta: { requireAuth: true }
      },
      {
        path: 'tasks',
        name: 'tasks',
        component: TasksView,
        meta: { requireAuth: true }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  // console.log(userStore.user)
  if (!userStore.user && to.meta.requireAuth) {
    return { path: '/signin' }
  }
})
export default router
