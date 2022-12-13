<template>
  <div>
    <!-- mostramos las burger de cada restaurante -->
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
    //recibimos el id del restauranta
    id: String,
  },
  async created() {
    //con el id del restaurante llamamos a la api para que 
    //nos pase el listado de las burger del restaurante
    const result = await restaurant.getRestaurantBurger(this.id);
    this.burgers = result;
  },
};
</script>

<style scoped></style>
