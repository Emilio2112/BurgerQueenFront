<template>
  <div>
    <div class="down">
      <button @click="getRestauran">Mostrar restaurantes</button>
    </div>
    <div v-for="(restaurant, idx) in restaurants">{{ restaurant.name }}</div>
  </div>
</template>

<script>
import restaurant from "../services/restaurant";

export default {
  data() {
    return {
      restaurants: {},
    };
  },
  methods: {
    async getRestauran() {
      console.log("1");
      const response = await restaurant.getRestaurants();
      this.restaurants = response;
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
