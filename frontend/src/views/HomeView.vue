<template>
  <v-app>
    <hello-world />
    <queen-card-vue />
    <new-burger-vue />
    <mvb-month-vue />
    <RestaurantCard />

  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import QueenCardVue from "../components/QueenCard.vue";
import NewBurgerVue from "../components/NewBurger.vue";
import MvbMonthVue from "../components/MvbMonth.vue";
import RestaurantCard from "@/components/RestaurantCard.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    QueenCardVue,
    NewBurgerVue,
    MvbMonthVue,
    RestaurantCard
  },
};
</script>
