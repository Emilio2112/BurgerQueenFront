<template>
  <v-card class="mt-6 mx-auto" max-width="340">
    <v-img
      class="amber--text text--darken-1"
      height="200px"
      src="https://content.sinqro.com/49739e7102_bd83d69029_78731592906595KAWAMBA_CANARIAS-44.jpg"
    >
      <div class="back">
        <v-card-title id="text" >MVB del mes</v-card-title>

      </div>    


    </v-img>

    <v-card-subtitle class="pb-0" id="text"> Nevada </v-card-subtitle>

    <v-card-text id="text" class="text--primary">
      <div>Kawamba</div>

      <div>
        ¿Quién quiere pan pudiendo poner pollo crujiente?
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <RouterLink :to="{ path: `/burger/639b585ac9fad6ab5b80f10a` }" style="text-decoration: none;">
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
export default {};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600;800&display=swap'); 

#text {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.back {
  background-color: rgba(53, 52, 52, 0.5);
}
</style>
