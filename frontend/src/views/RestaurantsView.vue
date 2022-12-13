<template>
  <div>
    <!-- Creo las tarjetas de todos los restaurantes con el v-for -->
    <div v-for="(restaurant, idx) in restaurants" :key="idx">
      <!-- Cada restaurante cogera solo su propia info que pasamos por props -->
      <RestaurantCard :restaurant="restaurant"></RestaurantCard>
    </div>
    <v-card-actions>
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1 ml-4"
        rounded
        dark
        @click="retroceder()"
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
        Volver
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import restaurant from "../services/restaurant";
import RestaurantCard from "@/components/RestaurantCard.vue";

export default {
  data() {
    return {
      restaurants: {},
    };
  },
  async created() {
    // nos traemos todos los restaurantes
    this.restaurants = await restaurant.getRestaurants();
  },
  components: {
    RestaurantCard,
  },
  methods: {
    retroceder() {
      this.$router.push(-1)
    },
  },
};
</script>

<style scoped>
.down {
  width: 200px;
  text-align: center;
  margin: 50px auto;
  border-radius: 50px;
  background-color: aquamarine;
}
</style>
