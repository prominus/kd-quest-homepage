<template>
  <header>
    <div id="nav-container" class="container py-4 px-3 mx-auto">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/documents">Documents</router-link></li>
            <li class="nav-item"><a class="nav-link" href="/launch">Launch</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>