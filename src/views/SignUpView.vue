<template>
    <h1>
        Sign Up
    </h1>
    <form @submit="submit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputName" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name">
        </div>
        <div class="mb-3">
            <label for="exampleInputLastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="lastname">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button type="submit" class="btn btn-primary">Sign Up!</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const email = ref([]);
const password = ref([]);
const name = ref([]);
const lastname = ref([]);
const userStore = useUserStore()

const submit = (event) => {
    event.preventDefault()
    userStore.signUp(email.value, password.value, name.value, lastname.value)
}


</script>