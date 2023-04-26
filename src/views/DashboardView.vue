<template>
    <h1>dashboard</h1>
    <!-- <RouterLink to="/dashboard/account">Account</RouterLink> -->
    <RouterLink to="/dashboard/tasks">My Tasks</RouterLink>
    <SignOut />
    <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';

import SignOut from '../components/SignOut.vue';


</script>