<template>
  <header>
    <div id="nav-container" class="container py-4 px-3 mx-auto">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link class="navbar-brand mb-0 h1" to="/">
          <img src="/src/assets/kd-logo.svg" width="120" height="120" class="d-inline-block align-center" alt="">
          Koala Down Quest
        </router-link>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="row mx-small-auto px-4">

            <ul class="navbar-nav col-lg-11 mx-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
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
              <li class="nav-item"><a class="nav-link" href="https://launch.koaladown.quest">Launch Game</a></li>
            </ul>
            <ul class="navbar-nav col-lg-1 mx-auto">
              <li class="h4" v-if="isLoggedIn === true">
                <router-link class="nav-link badge" to="/Account">
                  Account</router-link>
              </li>
              <li class="h4" v-if="isLoggedIn === true">
                <button class="nav-link badge" @click="logout">
                  Logout
                </button>
              </li>
              <li class="h4" v-if="isLoggedIn === false">
                <router-link class="nav-link badge" to="/Login">Login</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
// @ts-ignore
import { firebaseAuth } from "@/auth";

// Synced values with login form
const isLoggedIn = ref(false);

// Will show login form if user is not logged in. Otherwise, will show logout button
onAuthStateChanged(firebaseAuth, user => {
  isLoggedIn.value = (user != null);
});

function logout() {
  signOut(firebaseAuth);
}

</script>