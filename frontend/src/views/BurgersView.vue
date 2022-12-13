<template>
  <v-container>
    <v-row>
      <v-col v-for="(burger, idx) in burgers" :key="idx" cols="4">
        <BurgerCard :burger="burger"></BurgerCard>
      </v-col>
    </v-row>
    <!-- 
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
      </v-card-actions> -->
  </v-container>
</template>

<script>
import burger from "../services/burgers";
import BurgerCard from "@/components/BurgerCard.vue";

export default {
  data() {
    return {
      burgers: {},
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
      window.history.back();
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
