<template>
    <form class="form-inline my-2 my-lg-0 ml-auto" @submit.prevent="login">
        <div class="input-group">
            <input type="text" v-model="email" class="form-control mr-sm-2" placeholder="Email" aria-label="Email"
                required />
            <input type="password" v-model="password" class="form-control mr-sm-2" placeholder="Password"
                aria-label="Password" name="passwdInput" required id="password" />
            <input type="submit" class="btn bg-danger btn-lg text-white my-2 my-sm-0" value="Login">
        </div>
    </form>
    <div class="text-white">{{ invalidMessage }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
// @ts-ignore
import { firebaseAuth } from "@/auth";
// @ts-ignore
import router from '../index'

// Synced values with login form
const email = ref('');
const password = ref('');
const invalidMessage = ref('');

// Log in the user with email/password credentials
function login() {  
  signInWithEmailAndPassword(firebaseAuth, email.value, password.value).then(() => {
    email.value = "";
    password.value = "";
    invalidMessage.value = "";
    router.push('/');
  }).catch(() => {
    invalidMessage.value = "Invalid Login";
  });

}
</script>