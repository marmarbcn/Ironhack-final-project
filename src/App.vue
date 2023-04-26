

<template>
  <div class="container contrast-primary-background-color">
    <header>
      <Navbar />
    </header>

    <body>

      <div class="container text-center">
        <RouterView />
      </div>


    </body>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import PopupAuth from './components/PopupAuth.vue'
import HomeView from '@/views/HomeView.vue'


const isOpen = ref(false);


</script>

<style scoped>
.container {
  max-width: 800px;

}
</style>


