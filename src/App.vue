

<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <div class="container-fluid p-5">

      <RouterView />


    </div>
  </main>
</template>
<script setup>

import NavbarComponent from './components/NavbarComponent.vue'

import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'


const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)


onMounted(async () => {
  try {
    await userStore.fetchUser() // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: '/signin' });
    } else {
      // continue to tasks
      router.push({ path: '/' });
    }
  } catch (e) {
    console.error(e)
  }
})

</script>



