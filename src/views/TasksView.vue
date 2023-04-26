<template>
    <h1>Tasks View</h1>

    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <SignOut />
</template>

<script setup>
import { RouterLink } from 'vue-router';

import SignOut from '../components/SignOut.vue';

</script>