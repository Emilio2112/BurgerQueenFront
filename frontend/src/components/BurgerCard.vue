<template>
  <v-card class="mt-10 mx-auto" max-width="340">
    <v-img
      class="amber--text text--darken-1"
      height="200px"
      :src="burger.photo"
    >
      <div class="back">
        <v-card-title>{{ burger.name }}</v-card-title>
      </div>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ burger.style }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ getRestName }}</div>

      <div>
        {{ burger.description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <RouterLink :to="{ path: `/burger/${burger._id}` }" style="text-decoration: none;">
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-hamburger</v-icon>
        leer más
      </v-btn></RouterLink>
    </v-card-actions>
  </v-card>
</template>

<script>
import { RouterLink } from "vue-router";
import restaurant from "@/services/restaurant";
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  props: {
    burger: Object,
  },
  async created() {
    const result = await restaurant.getRestaurants(
      this.burger.restaurant.toString()
    );
    this.restaurants = result;
  },
  computed: {
    getRestName() {
      const restName = {};
      this.restaurants.filter((el) => {
        if (el._id === this.burger.restaurant.toString()) {
          restName.name = el.name;
        }
      });
      return restName.name;
    },
  },
};
</script>

<style scoped>
.back {
  background-color: rgba(53, 52, 52, 0.5);
}
</style>
