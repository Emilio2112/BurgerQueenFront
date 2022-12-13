<template>
  <div>
    <!-- mostramos las burger de cada restaurante -->
    <div v-for="(burger, idx) in burgers" :key="idx">
      <BurgerCard :burger="burger" />
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
  methods: {
    retroceder() {
      this.$router.push(-1)
    },
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
