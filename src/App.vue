

<template>
  <header>
    <Navbar />
  </header>

  <body>
    <div class="container">
      <div class="auth">
        <RouterView />
        <RouterLink to="/home">home</RouterLink>
        <RouterLink to="/auth">Auth</RouterLink>
      </div>
    </div>





  </body>
</template>
<script setup>

import Navbar from './components/Navbar.vue'
import { RouterLink, useRouter } from 'vue-router';



const router = useRouter()




</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>


