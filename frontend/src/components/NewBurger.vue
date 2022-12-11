<template>
  <v-card class="mt-6 mx-auto" max-width="340">
    <v-img
      class="amber--text text--darken-1"
      height="200px"
      src="https://200gramos.com/wp-content/uploads/2022/08/Dara_Vegetal_Burger.webp"
    >
    <div class="back">
      <v-card-title>The Newcomer</v-card-title>
    </div>
      
    </v-img>

    <v-card-subtitle class="pb-0"> Dara veggie </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>200gr</div>

      <div>
        En lugar de carne, puedes pedir tu hamburguesa con esta opción de nuestra amiga Dara Feeling Food. Remolacha natural, zanahoria, avena, eneldo y lima.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-hamburger</v-icon>
        leer más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>

.back {
  background-color: rgba(53, 52, 52, 0.5);
  
}

</style>
