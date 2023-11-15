<template>
  <header>
    <div id="nav-container" class="container py-4 px-3 mx-auto">
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            KD presents Starfinder
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/Docs">Docs</router-link>
              </li> -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Documents
                </a>
                <ul class="dropdown-menu dropdown-menu-dark bg-primary">
                  <li><router-link class="nav-link" to="/Guide">Guide</router-link></li>
                  <li><router-link class="nav-link" to="/Links">Links</router-link></li>
                  <li><router-link class="nav-link" to="/PdfDocs">PDF Docs</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-danger" href="#">Launch Game</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>