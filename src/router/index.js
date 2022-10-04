import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homepage
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/kasir',
      name: 'kasir',
      component: () => import('../views/kasir.vue')
    },
    {
      path: '/kadmin',
      name: 'kadmin',
      component: () => import('../views/kadmin.vue')
    },
    {
      path: '/litem',
      name: 'litem',
      component: () => import('../views/litem.vue')
    },
    {
      path: '/vkaradmin',
      name: 'vkaradmin',
      component: () => import('../views/vkaradmin.vue')
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: () => import('../views/editprofile.vue')
    },
    {
      path: '/tambahuser',
      name: 'tambahuser',
      component: () => import('../views/tambahuser.vue')
    },
    {
      path: '/tambahbarang',
      name: 'tambahbarang',
      component: () => import('../views/tambahbarang.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue')
    }
  ]
})

export default router
