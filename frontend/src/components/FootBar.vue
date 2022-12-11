<template>
  
  <v-footer dark padless fixed>
    <v-card class="flex" flat tile color="#001D3D">
      <v-card-title> 
        <v-btn icon large outlined> <v-icon color="#FFC300"> mdi-email-outline</v-icon></v-btn>
        Contactanos
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
  }),
};
</script>
