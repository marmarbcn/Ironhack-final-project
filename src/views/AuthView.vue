<template>
    <h1>Auth View</h1>
    <RouterLink to='auth/signin'>Sign In</RouterLink>
    <RouterLink to="signup">Sign Up</RouterLink>
    <RouterLink to="/">Auth</RouterLink>
    <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>