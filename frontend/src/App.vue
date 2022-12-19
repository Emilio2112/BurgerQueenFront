<template>
  <v-app id="text">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12"> <nav-bar /></v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row
          ><v-col cols="12"> <RouterView /></v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="12"><Footer></Footer></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import api from "./services/api";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/FootBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600;800&display=swap");

#text {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
</style>
