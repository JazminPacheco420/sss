import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/view/Login.vue';
import Register from '@/view/Register.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
