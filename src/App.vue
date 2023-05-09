

<template>
  <div class="d-flex flex-column vh-100 ">
    <header>
      <NavbarComponent />
    </header>

    <main class="">
      <div class="p-sm-5 h-100">

        <RouterView />
      </div>


    </main>
  </div>
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
      router.push({ path: '/' });
    } else {
      // continue to tasks
      router.push({ path: '/tasks' });
    }
  } catch (e) {
    console.error(e)
  }
})

</script>

<style scoped>
main {
  flex: 1 0 0;
  min-height: 0;

}
</style>

