<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          position="top"
          class="amber--text text--darken-1 align-end"
          height="200px"
          src="https://i.pinimg.com/736x/5f/93/03/5f9303c8a1127f572b061c7632bb3d77--restaurant-layout-burger-restaurant.jpg"
        />
        <div>
          <v-expansion-panels class="back" tile>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header id="text">
                {{ restaurants.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>{{ restaurants.address }}</div>
                <div>{{ restaurants.location }}</div>
                <div>{{ restaurants.phone }}</div>
                <div><a :href="restaurants.web">Visitar restaurante</a></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(burger, idx) in burgers"
        :key="idx"
      >
        <BurgerCard :burger="burger" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-actions>
          <v-btn
            id="text"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import restaurant from "@/services/restaurant";
import BurgerCard from "@/components/BurgerCard.vue";

export default {
  components: {
    BurgerCard,
  },
  data() {
    return {
      burgers: {},
      restaurants: {},
    };
  },
  props: {
    //recibimos el id del restauranta
    id: String,
  },
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
  },
  async created() {
    //con el id del restaurante llamamos a la api para que
    //nos pase el listado de las burger del restaurante
    const result = await restaurant.getRestaurantBurger(this.id);
    this.burgers = result;
    this.restaurants = await restaurant.getOneResturant(this.$route.params.id);
  },
};
</script>

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
   
  font-weight: bold;
}
.back {
  background-color: rgba(53, 52, 52, 0.5);
}
</style>
