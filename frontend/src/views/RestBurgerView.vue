<template>
  <div>
    <div v-for="(burger, idx) in burgers" :key="idx">
      <BurgerCard :burger="burger" />
    </div>
  </div>
</template>

<script>
import restaurant from "@/services/restaurant";
import BurgerCard from "@/components/BurgerRestaurant.vue";

export default {
  components: {
    BurgerCard,
  },
  data() {
    return {
      burgers: [],
    };
  },
  props: {
    id: String,
  },
  async created() {
    const result = await restaurant.getRestaurantBurger(this.id);
    console.log(result)
    this.burgers = result;
  },
};
</script>

<style scoped></style>
