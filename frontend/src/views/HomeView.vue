<template>
  <v-app>
    <hello-world />
    <queen-card-vue />
    <new-burger-vue />
    <mvb-month-vue />

  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import QueenCardVue from "../components/QueenCard.vue";
import NewBurgerVue from "../components/NewBurger.vue";
import MvbMonthVue from "../components/MvbMonth.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    QueenCardVue,
    NewBurgerVue,
    MvbMonthVue  
  },
};
</script>
