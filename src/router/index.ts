import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue'
import DocsVue from '../views/Docs.vue'

const routes = [
    {path: '/', name: 'Home', component: HomeVue},
    {path: '/documents', name: 'Docs', component: DocsVue},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router