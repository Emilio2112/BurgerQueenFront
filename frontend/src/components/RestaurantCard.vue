<template>
  <v-card class="mt-6 mx-auto" max-width="340">
    <v-img
      class="amber--text text--darken-1"
      height="200px"
      src="https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_es:cuisines:hamburguesas-3.jpg/v1/es/restaurants/56273.jpg"
    >
      <div class="back">
        <v-card-title>Rockabilly Venegas</v-card-title>
      </div>
    </v-img>

    <v-card-subtitle class="pb-0"> Población </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Dirección</div>

      <div>El sitio de las hamburguesas</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark>
        <v-icon color="#FFC300" class="mr-1"> mdi-food </v-icon>
        Leer más
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
