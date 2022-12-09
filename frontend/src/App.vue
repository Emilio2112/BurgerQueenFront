<template>
  <div>
    <nav-bar />
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>

<style scoped>

</style>
