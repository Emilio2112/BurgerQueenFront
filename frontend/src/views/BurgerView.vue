<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://fastly.4sqi.net/img/general/600x600/592232052_x_CjIOIhjjYloKlglKOxM5vifzCxr-ECboqu-nc7Plc.jpg"
    ></v-img>

    <v-card-title
      >Red Smoke
      <v-spacer />
      <v-btn icon color="#FFC300" x-large>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-row class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">
        <v-btn
      class="mx-1"
      fab
      dark
      small
      color="amber darken-1"
    >
      <v-icon dark>
        mdi-silverware-fork-knife
      </v-icon>
    </v-btn>
        Rockabilly Venegas</div>

      <div>
        Ahumada y picante. Salsa american burger, tomate, chili con carne, bacon
        crujiente, cebolla roja y salsa chipotles ahumados Tabasco. La favoríta
        de Joaquín.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-card-title>Puntuación</v-card-title>

      <v-rating
        :value="4.5"
        color="amber"
        dense
        half-increments
        x-large
      ></v-rating>
      <div class="grey--text ms-4">4.5 (413)</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
        Volver
      </v-btn>
      <v-spacer />
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1">mdi-comment-text-outline</v-icon>
        Comentar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped></style>
