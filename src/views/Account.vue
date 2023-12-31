<template>
    <div id="Account-container" class="container py-4 px-3 mx-auto">
        <div class="row">
            <h1>Account</h1>
            <label><b>Email:</b> {{ email }}</label>
            <label class="italics">If you'd like the email changes reach out to Cody.</label>
            <div>
                <button id="verify-email" @click="verifyEmail">Verify Email</button>
                <label for="verify-email">{{ emailLabel }}</label>
            </div>
            <div>
                <button id="reset-password" @click="resetPassword">Reset Password</button>
                <label for="reset-password">{{ passwordLabel }}</label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../auth";
import { Ref, ref } from "vue";

const user: Ref<User | null> = ref(null);
const email: Ref<string | null> = ref('');
const emailLabel: Ref<string | null> = ref('');
const passwordLabel: Ref<string | null> = ref('');

onAuthStateChanged(firebaseAuth, u => {
    user.value = u;
    if (u != null) {
        email.value = u.email;
    }
    if (user.value?.emailVerified === false) {
        const emailButton = document.getElementById("email_button");
        if (emailButton != null) {
            emailButton.style.display = "none";
        }
    }
})

function verifyEmail(_: any) {
    if (user.value != null) {
        sendEmailVerification(user.value).then(() => {
            emailLabel.value = "Email sent";
        }).catch((e) => {
            emailLabel.value = "Error sending email";
            console.log(e);
        })
    }
}

function resetPassword(_:any) {
    if (email.value != null) {
        sendPasswordResetEmail(firebaseAuth, email.value).then(() => {
            passwordLabel.value = "Password reset sent";
        }).catch((e) => {
            passwordLabel.value = "Error resetting password";
            console.log(e);
            
        });
    }
}
</script>