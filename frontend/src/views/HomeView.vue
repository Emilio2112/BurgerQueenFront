<template>
  <v-app>
    <div>
      <v-row>
        <v-col cols="12">
          <hello-world />
        </v-col>
      </v-row>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <queen-card-vue />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <new-burger-vue />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <mvb-month-vue />
        </v-col>
      </v-row>
    </v-container>
    <!--     <RestaurantCard /> -->
  </v-app>
</template>

<script>
import api from "@/services/api";
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
    RestaurantCard,
  },
};
</script>
