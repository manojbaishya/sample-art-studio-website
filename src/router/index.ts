import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/ProjectsView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/team',
            name: 'team',
            component: () => import('../views/TeamView.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/ScratchpadView.vue')
        }
    ]
})

export default router
