<template>
    <div id="login-container" class="container py-4 px-3 mx-auto">
        <form class="form-signin">
                <img src="/src/assets/kd-icon.svg" alt="" width="80" height="80">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputUsername" class="sr-only">Username</label>
                <input type="text" name="inputUsername" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me">
                        Remember me    
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
        </form>
    </div>
</template>

<script setup lang="ts">
</script>