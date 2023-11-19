<template>
    <footer class="bg-primary-400 text-accent-400">
        <div class="container py-4 px-3 mx-auto">
            <div class="nav-wrapper">
                <div class="row">
                    <div class="col">
                        <LicenseVue />
                    </div>
                    <div class="col">
                        <nav class="footer-nav">
                            <ul role="list" aria-label="Footer" class="footer-list">
                                <li><router-link class="footer-link" to="/">Home</router-link></li>
                                <li><router-link class="footer-link" to="/Guide">Guide</router-link></li>
                                <li><router-link class="footer-link" to="/Links">Reference Links</router-link></li>
                                <li><router-link class="footer-link" to="/PdfDocs">PDF Documents</router-link></li>
                                <li><a class="footer-link" href="https://launch.koaladown.quest">Launch Game</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import LicenseVue from "./License.vue";
</script>