<template>
  <div>
    <div v-for="(restaurant, idx) in restaurants" :key="idx">
      <RestaurantCard :restaurant="restaurant"></RestaurantCard>
    </div>
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
    this.restaurants = await restaurant.getRestaurants();
  },
  components: {
    RestaurantCard,
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
