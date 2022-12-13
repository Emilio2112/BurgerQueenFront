<template>
    <v-card>
      <div v-for="(burger, idx) in burgers" :key="idx">
        <BurgerCard :burger="burger"></BurgerCard>
      </div>
      
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
  