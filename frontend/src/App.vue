<template>
  <v-app>
    <v-main>
      <nav-bar />
      <RouterView />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>

import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/FootBar.vue"


export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
};
</script>

<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
}

</style>
