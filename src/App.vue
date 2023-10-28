<script setup lang="ts">
</script>

<template>
  <header class="header-nav">
    <div class="container">
      <div class="nav-wrapper">
        <a class="logo-icon" href="#"><img src="./assets/vite.svg" alt="Logo"></a>
        <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
          <img class="icon-close" src="./assets/icon-close.svg" alt="" aria-hidden="true">
          <img class="icon-hamburger" src="./assets/icon-hamburger.svg" alt="" aria-hidden="true">
          <span class="visually-hidden">Menu</span>
        </button>
        <nav id="primary-navigation" class="primary-navigation">
          <ul role="list" id="nav-list" class="nav-list">
            <li><router-link class="nav-button" to="/">Home</router-link></li>
            <li><router-link class="nav-button" to="/documents">Documents</router-link></li>
            <li><router-link class="nav-button" to="/licenses">Licenses</router-link></li>
            <li><a class="nav-button" href="/launch">Launch</a></li>
          </ul>
        </nav>
        <button class="button">Login</button>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <footer class="bg-primary-400 text-accent-400">
    <div class="container">
      <div class="nav-wrapper">
        <div>
          <a href="#"><img src="./assets/vite.svg" alt="Logo"></a>
        </div>
        <div>
          <nav class="footer-nav">
            <ul role="list" aria-label="Footer" class="footer-list">
              <li><router-link class="footer-link" to="/">Home</router-link></li>
              <li><router-link class="footer-link" to="/documents">Documents</router-link></li>
              <li><router-link class="nav-button" to="/licenses">Licenses</router-link></li>
              <li><a class="footer-link" href="/launch">Launch</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

