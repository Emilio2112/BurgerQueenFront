<template>
  <div>
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
    id: String,
  },
  methods: {
    retroceder() {
      window.history.back();
    },
  },
  async created() {
    const result = await restaurant.getRestaurantBurger(this.id);
    console.log(result)
    this.burgers = result;
  },
};
</script>

<style scoped></style>
