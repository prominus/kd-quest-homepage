import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

const primaryHeader = document.querySelector(".header-nav") as HTMLHeadElement;
const navToggle = document.querySelector(".mobile-nav-toggle") as HTMLButtonElement;
const primaryNav = document.querySelector(".primary-navigation") as HTMLUListElement;
const hamburgerIcon = document.querySelector(".icon-hamburger") as HTMLImageElement;
const closeIcon = document.querySelector(".icon-close") as HTMLImageElement;

navToggle.addEventListener('click', () => {
    toggleNavigation()
});

window.addEventListener('resize', () => {
    const pageWidth = window.innerWidth;
    if (pageWidth < 800 && primaryNav.hasAttribute('data-visible')) {
        toggleNavigation();
        console.log('Page width changes to: ' + pageWidth + 'px');
    }
    
    
});

function toggleNavigation() {
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', 'false') : navToggle.setAttribute('aria-expanded', 'true')
    primaryNav.hasAttribute('data-visible') ? hamburgerIcon.style.display = 'block' : hamburgerIcon.style.display = 'none'
    primaryNav.hasAttribute('data-visible') ? closeIcon.style.display = 'none' : closeIcon.style.display = 'block'
    primaryNav.toggleAttribute("data-visible")
    primaryHeader.toggleAttribute('data-overlay')
}
