<template>
    <button class="btn" @click="signOut">Sign Out</button>
</template>

<script setup>
import router from '../router';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const signOut = () => {
    userStore.signOut();
    router.push('/');

}

</script>