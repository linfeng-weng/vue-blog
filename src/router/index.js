import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/home/home.vue'), //路由懒加载
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
                    path: ':name',
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
                    path: ':name',
                    component: () => import('@/views/tag/cpns/tag-post.vue')
                }
            ]
        },
        {
            path: '/archive',
            component: () => import('@/views/archive/archive.vue'), 
        },
        {
            path: '/article/:id',
            component: () => import('@/views/article/article.vue'),
        }
    ]
})

export default router