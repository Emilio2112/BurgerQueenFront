<template>
  <v-card class="mt-6 mx-auto" max-width="340">
    <v-img
      class="amber--text text--darken-1"
      height="200px"
      src="https://fastly.4sqi.net/img/general/600x600/592232052_x_CjIOIhjjYloKlglKOxM5vifzCxr-ECboqu-nc7Plc.jpg"
    >
    <div class="back">
      <v-card-title id="text">The Queen</v-card-title>
    </div>
      
    </v-img>

    <v-card-subtitle id="text" class="pb-0"> Red Smoke </v-card-subtitle>

    <v-card-text id="text" class="text--primary">
      <div>Rockabilly Venegas</div>

      <div>
        ¡God Save the Burger Queen!
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <RouterLink :to="{ path: `/burger/6391d27c25cf13efff1dfa8d` }" style="text-decoration: none;">
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
  font-size: calc(16px+1vw);
  font-weight: bold;
}
.back {
  background-color: rgba(53, 52, 52, 0.5);
  
}

</style>
