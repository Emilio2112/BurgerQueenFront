<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet elevation="10" class="py-4 px-1">
          <v-chip-group mandatory active-class="amber--text text--darken-1"  show-arrows >
            <v-chip v-for="(tag, idx) in tags" :key="idx" @click="filterBurgers(`${tag}`)">
              {{tag}}
            </v-chip>

            <v-chip @click="allBurgers">
              Todas
            </v-chip>
          </v-chip-group>
        </v-sheet>
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
        <BurgerCard :burger="burger"></BurgerCard>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-btn
        id="text"
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1 ml-4 mt-2"
        rounded
        dark
        @click="retroceder()"
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
        Volver
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import burger from "../services/burgers";
import BurgerCard from "@/components/BurgerCard.vue";



export default {
  data() {
    return {
      burgers: {},
      tags: ["Normal", "Cheese Burger", "Pollo", "Veggie", "Smash", "Gourmet"],

    };
  },
  async created() {
    this.burgers = await burger.getBurgers();
  },
  components: {
    BurgerCard,
  },
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
    async filterBurgers(type) {
      this.burgers = await burger.filterByType(type)
    },
    async allBurgers(){
      this.burgers = await burger.getBurgers()
    }
  },

};
</script>

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
   
  font-weight: bold;
}
.down {
  width: 200px;
  text-align: center;
  margin: 50px auto;
  border-radius: 50px;
  background-color: aquamarine;
}
</style>
