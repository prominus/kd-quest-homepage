import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue'
import DocumentsVue from '../views/Documents.vue'
import LaunchVue from '../views/Launch.vue'
import LicenseVue from '../views/License.vue'

const routes = [
    {path: '/', name: 'Home', component: HomeVue},
    {path: '/documents', name: 'Documents', component: DocumentsVue},
    {path: '/licenses', name: 'Licenses', component: LicenseVue},
    {path: '/launch', name: 'Launch', component: LaunchVue},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router