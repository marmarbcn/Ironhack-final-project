<template>
    <h1>Auth View</h1>
    <RouterLink to='/auth/signin'>Sign In</RouterLink>
    <RouterLink to="/auth/signup">Sign Up</RouterLink>

    <RouterView />
    <SignOut />
</template>

<script setup>
import SignOut from '../components/SignOut.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>




