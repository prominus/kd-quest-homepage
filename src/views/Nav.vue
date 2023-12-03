<template>
  <header>
    <div id="nav-container" class="container py-4 px-3 mx-auto">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand mb-0 h1" href="#">
          <img src="/src/assets/kd-logo.svg" width="120" height="120" class="d-inline-block align-center" alt="">
          Koala Down Quest
        </a>
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
                    <input type="text" class="form-control mr-sm-2" placeholder="Username" aria-label="Username">
                    <input type="password" class="form-control mr-sm-2" placeholder="Password" aria-label="Password"
                      name="passwdInput" id="passwdInput">
                    <input type="submit" class="btn bg-danger btn-lg text-white my-2 my-sm-0" value="Login">
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isLoggedIn: false,
      username: 'Username',
      password: 'Password'
    };
  },
  methods:
  {
    login() {
      // TODO: authenticate credentials
      this.isLoggedIn = true;

    },
    logout() {
      this.isLoggedIn = false;
    }
  }
}
</script>