

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

import Navbar from './components/Navbar.vue'



</script>

<style scoped>
.container {
  max-width: 800px;

}
</style>


