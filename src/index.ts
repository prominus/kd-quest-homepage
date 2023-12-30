import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import GuideVue from "@views/Guide.vue";
// @ts-ignore
import HomeVue from '@views/Home.vue'
// @ts-ignore
import PdfDocsView from '@views/PdfDocs.vue';
// @ts-ignore
import LinksVue from "@views/Links.vue";

const routes = [
    {path: '/', name: 'Home', component: HomeVue},
    {path: '/Links', name: 'Links', component: LinksVue},
    {path: '/PdfDocs', name: 'PdfDocs', component: PdfDocsView},
    {path: '/Guide', name: 'Guide', component: GuideVue}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router