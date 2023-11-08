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
                                <li><router-link class="footer-link" to="/documents">Documents</router-link></li>
                                <li><a class="footer-link" href="/launch">Launch Game</a></li>
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