import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem('token')) {
    next();
    return;
  }
  router.push({ 
    name: 'login',
    params: {
      returnTo: to.path,
      query: to.query,
    },
  });
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/store',
      name: 'store',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/login',
      name:'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/ProtectedView.vue'),
      beforeEnter: (to, from, next) => {
        ifAuthenticated(to, from, next)
      },
    }
  ]
})

export default router