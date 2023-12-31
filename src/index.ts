import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import AccountVue from "@views/Account.vue";
// @ts-ignore
import GuideVue from "@views/Guide.vue";
// @ts-ignore
import HomeVue from '@views/Home.vue'
// @ts-ignore
import LoginVue from "@views/Login.vue";
// @ts-ignore
import PdfDocsView from '@views/PdfDocs.vue';
// @ts-ignore
import LinksVue from "@views/Links.vue";
// @ts-ignore
import { firebaseAuth } from "./auth";

const routes = [
    {path: '/', name: 'Home', component: HomeVue},
    {path: '/Account', name: 'Account', component: AccountVue},
    {path: '/Links', name: 'Links', component: LinksVue},
    {path: '/Login', name: 'Login', component: LoginVue},
    {path: '/PdfDocs', name: 'PdfDocs', component: PdfDocsView},
    {path: '/Guide', name: 'Guide', component: GuideVue}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach(async (to, _) => {
    if (to.name === "PdfDocs" && firebaseAuth.currentUser == null) {
        return {name: "Login"}
    }
});

export default router