<template>
  <v-container class="amber" >
    <v-card flat class="amber">
    <v-card-text  class="text-h5 mb-1 font-weight-bold text-center">
      Las despedidas son amargas, por eso <br />mejor quitarnos el sabor <br />
      con una buena hamburguesa... ¡¡¡<br /><br />Esperamos verte de nuevo por
      aquí !!!
    </v-card-text>
    <v-card-actions>
      
      <v-spacer></v-spacer>
      <RouterLink :to="{ path: `/` }" style="text-decoration: none;">
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1 ml-4"
        style="text-decoration: none;"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
        Home
      </v-btn>
    </RouterLink>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<style scoped></style>
