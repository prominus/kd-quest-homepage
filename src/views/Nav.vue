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
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Documents
              </a>
              <ul class="dropdown-menu dropdown-menu-dark bg-primary">
                <li><router-link class="nav-link" to="/Guide">Guide</router-link></li>
                <li><router-link class="nav-link" to="/Links">Links</router-link></li>
                <li><router-link class="nav-link" to="/PdfDocs">PDF Docs</router-link></li>

              </ul>
            </li>
            <li><a class="nav-link" href="https://launch.koaladown.quest">Launch Game</a></li>
            <li>
              <div v-if="isLoggedIn">
                <button class="btn bg-danger btn-lg text-white my-2 my-sm-0" @click="logout">Logout</button>
              </div>
              <div v-else>
                <form class="form-inline my-2 my-lg-0 ml-auto" @submit.prevent="login">
                  <div class="input-group">
                    <input type="text" v-model="email" class="form-control mr-sm-2" placeholder="Email" aria-label="Email" required />
                    <input type="password" v-model="password" class="form-control mr-sm-2" placeholder="Password" aria-label="Password"
                      name="passwdInput" required id="password" />
                    <input type="submit" class="btn bg-danger btn-lg text-white my-2 my-sm-0" value="Login">
                  </div>
                </form>
                <div class="text-white">{{ invalidMessage }}</div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// @ts-ignore
import { firebaseAuth } from "@/auth";

// Synced values with login form
const email = ref('');
const password = ref('');
const isLoggedIn = ref(false);
const invalidMessage = ref('');

// Will show login form if user is not logged in. Otherwise, will show logout button
onAuthStateChanged(firebaseAuth, user => {
  isLoggedIn.value = (user != null);
});

// Log in the user with email/password credentials
function login() {  
  signInWithEmailAndPassword(firebaseAuth, email.value, password.value).then(_ => {
    email.value = "";
    password.value = "";
    invalidMessage.value = "";

  }).catch(_ => {
    invalidMessage.value = "Invalid Login";
  });

}

function logout() {
  signOut(firebaseAuth);
}
  

</script>