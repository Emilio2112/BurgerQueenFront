<template>
  <v-card>
    <v-row>
      <v-col cols="12" sm="10" md="8">
        <v-sheet elevation="10" class="py-4 px-1">
          <v-chip-group mandatory active-class="primary--text">
            <v-chip v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
    <div v-for="(burger, idx) in burgers" :key="idx">
      <BurgerCard :burger="burger"></BurgerCard>
    </div>
    <v-card-actions>


      <v-btn
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
  </v-card>


</template>

<script>
import burger from "../services/burgers";
import BurgerCard from "@/components/BurgerCard.vue";

export default {
  data() {
    return {
      burgers: {},
      tags: [
        "Normal",
        "Cheese Burger",
        "Pollo",
        "Veggie",
        "Smash",
        "Gourmet"
      ],
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
      this.$router.go(-1)
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
