import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: () => import('@/views/category/category.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/category/cpns/category-items.vue')
        },
        {
          path: ':id',
          component: () => import('@/views/category/cpns/category-post.vue')
        }
      ]
    },
    {
      path: '/tag',
      component: () => import('@/views/tag/tag.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/tag/cpns/tag-items.vue')
        },
        {
          path: ':id',
          component: () => import('@/views/tag/cpns/tag-post.vue')
        }
      ]
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/search/cpns/search-article.vue')
        }
      ]
    },
    {
      path: '/archive',
      component: () => import('@/views/archive/archive.vue')
    },
    {
      path: '/article/:id',
      component: () => import('@/views/article/article.vue')
    }
  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
