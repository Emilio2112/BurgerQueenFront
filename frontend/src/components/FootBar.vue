<template>
  

  <v-footer dark padless app>
    <v-card class="flex" flat tile color="#001D3D">
      <v-card-title id="text" class="amber--text text--darken-1"> 
        <v-btn icon large> <v-icon class="amber--text text--darken-1"> mdi-email-outline</v-icon></v-btn>
        Contáctanos
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-1" icon>
          <v-icon size="24px" class="amber--text text--darken-1">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
</style>
