<template>
    <div class="card card-max-width">
        <div class="p-5">
            <h4 class="card-title">Welcome back! </h4>
            <!-- <RouterLink to="/dashboard/account">Account</RouterLink> -->
            <RouterLink to="/dashboard/tasks">My Tasks</RouterLink>
            <RouterView />
        </div>
    </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';




</script>