import { createApp } from 'vue'
// import { createPinia } from "pinia";
// import piniaPluginPersistedState from "pinia-plugin-persistedstate";
// @ts-ignore
import App from '@/App.vue'
// @ts-ignore
import router from '@'

// Import our custom CSS
import '@scss/styles.scss'

// Import all of Bootstrap's JS
// import * as Popper from "@popperjs/core";
import {Popover} from 'bootstrap';

document.querySelectorAll('[data-bs-toggle="popover"').forEach(popover => {
    new Popover(popover);
});

createApp(App).use(router).mount('#app')