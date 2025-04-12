<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
  import './assets/styles/global.css';
  import { RouterView, RouterLink } from 'vue-router';

  export default {
    name: "App",
  }
</script>