// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
        },
        {
          path: '/About',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
        },
        {
          path: '/portfolio',
          name: 'Portfolio',
          component: () => import('@/views/portfolio/Index.vue'),
        },
        {
          path: '/details/:Id?',
          name: 'Detail',
          component: () => import('@/views/detail/Index.vue'),
        },
        {
          path: '/404',
          name: '404',
          component: () => import('@/views/Error/NotFoundViewComponent'),
        },
        {
          path: '/403',
          name: 'network-issue',
          component: () => import('@/views/Error/NetworkIssueViewComponent'),
        },
        {
          path: '*',
          redirect: { name: '404' },
        },
      ],
    },
  ],
})

export default router
