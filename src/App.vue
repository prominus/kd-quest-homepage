<script setup lang="ts">
import NavVue from "./views/Nav.vue";
import FooterVue from "./views/Footer.vue";
</script>

<template>
  <NavVue />
  <main>
    <div id="main-container" class="container py-4 px-3 mx-auto">
      <router-view></router-view>
    </div>
  </main>
  <FooterVue/>
</template>

