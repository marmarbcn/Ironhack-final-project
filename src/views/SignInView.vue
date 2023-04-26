<template>
    <h1>Sign In</h1>
    <form @submit="submit">
        <div class="mb-3">
            <label for="input-email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" v-model="email" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="input-password1" class="form-label">Password</label>
            <input type="password" class="form-control" id="input-password1" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/user';
import { ref } from 'vue';
import router from '../router';

const email = ref([]);
const password = ref([]);
const userStore = useUserStore()


const submit = async (event) => {
    event.preventDefault()
    await userStore.signIn(email.value, password.value)
    console.log('holi')
    router.push('/dashboard')
    console.log('puti')
}



</script>