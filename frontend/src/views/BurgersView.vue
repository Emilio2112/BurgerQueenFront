<template>
    <v-card>
      <div v-for="(burger, idx) in burgers" :key="idx">
        <BurgerCard :burger="burger"></BurgerCard>
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
    </v-card>
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
