<template>
    <button @click="userStore.signOut">Sign Out</button>
</template>

<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

</script>