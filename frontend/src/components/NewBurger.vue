<template>
  <v-card class="mt-6 mx-auto" max-width="340">
    <v-img
      class="amber--text text--darken-1"
      height="200px"
      src="https://i.pinimg.com/474x/d9/6a/1d/d96a1d3e6315ed8e92c892fdd769f9b1.jpg"
    >
    <div class="back">
      <v-card-title id="text">The Newcomer</v-card-title>
    </div>
      
    </v-img>

    <v-card-subtitle id="text" class="pb-0"> Cangreburger </v-card-subtitle>

    <v-card-text id="text" class="text--primary">
      <div>Crustaceo Crujiente</div>

      <div>
        ¿Podrás descubrir el ingrediente secreto?
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <RouterLink :to="{ path: `/burger/639b2ac6d9ce1f83c6915b68` }" style="text-decoration: none;">
      <v-btn
        id="text"
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-hamburger</v-icon>
        leer más
      </v-btn></RouterLink>
    </v-card-actions>
  </v-card>
</template>

<script>
import { RouterLink } from "vue-router";

export default {};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600;800&display=swap'); 

#text {
  font-family: "Montserrat", sans-serif;
  font-size: calc(16px+1vw);
  font-weight: bold;
}

.back {
  background-color: rgba(53, 52, 52, 0.5);
}

</style>
