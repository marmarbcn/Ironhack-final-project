import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user';
//components
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import TasksView from '@/views/TasksView.vue';

const routes = [
  {
    path: '/signin',
    name: 'signIn',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUpView
  },
  {
    path: '/',
    name: 'tasks',
    component: TasksView,
    meta: { requireAuth: true }
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  const userStore = useUserStore();
  // console.log(userStore.user)
  if (!userStore.user && to.meta.requireAuth) {
    return { path: '/signin' };
  }
});
export default router;
