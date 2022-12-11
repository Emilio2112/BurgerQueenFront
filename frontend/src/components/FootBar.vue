<template>
  
  <v-footer dark padless fixed>
    <v-card class="flex" flat tile color="#001D3D">
      <v-card-title> 
        <v-btn elevation="11" icon large outlined></v-btn>  Contactanos
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-1" icon>
          <v-icon size="24px" color="#FFC300">
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
    icon: ["mdi-email"],
  }),
};
</script>
