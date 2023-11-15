import { createRouter, createWebHistory } from 'vue-router'
import GuideVue from "../views/Guide.vue";
import HomeVue from '../views/Home.vue'
import LoginVue from "../views/Login.vue";
import PdfDocsView from '../views/PdfDocs.vue'
import LinksVue from "../views/Links.vue";

const routes = [
    {path: '/', name: 'Home', component: HomeVue},
    {path: '/Links', name: 'Links', component: LinksVue},
    {path: '/PdfDocs', name: 'PdfDocs', component: PdfDocsView},
    {path: '/Guide', name: 'Guide', component: GuideVue},
    {path: '/Login', name: 'Login', component: LoginVue}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router