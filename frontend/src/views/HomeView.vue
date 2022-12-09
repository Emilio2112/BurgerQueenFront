<template>
  <v-app>
    <v-col >
      <v-row cols="12"> <nav-bar /></v-row>
      <v-row> <hello-world /></v-row>
    </v-col>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    NavBar,
  },
};
</script>
