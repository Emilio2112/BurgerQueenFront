<template>
  <v-container>
    <v-container>
      <v-row class="pa=10">
        <v-col cols="12" md="8" sm="4" class="mx-auto">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6" md="3" class="mx-5">
              <v-sheet> Nombre: <br />{{ users.name }} </v-sheet>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6" md="3" class="mx-5">
              <v-sheet> Username: <br />{{ users.username }} </v-sheet>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6" md="3" class="mx-5">
              <v-sheet> Email: <br />{{ users.email }} </v-sheet>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-btn
          id="text"
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1 ml-4"
          rounded
          dark
          :to="{ name: 'editar' }"
        >
          <v-icon color="#FFD60A0" class="mr-1"> mdi-pencil </v-icon>
          Editar
        </v-btn>
      </v-row>
    </v-container>

      <v-row class="text-h5 indigo--text text--darken-4 ml-4">
        <v-col>
          <v-sheet id="text">Mis Crush</v-sheet>
        </v-col>
      </v-row>

    <v-row>
      <v-col
        v-for="(favs, idx) in favorites"
        :key="idx"
        cols="12"
        sm="5"
        md="4"
      >
        <ProfileFavorite :fav="favs" />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-btn
          id="text"
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1 ml-4"
          rounded
          dark
          @click="retroceder()"
        >
          <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
          Volver
        </v-btn>
      </v-row>

      <v-row style="height: 150px" class="mt-8">
        <v-btn
          id="text"
          outlined
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1 mx-auto"
          rounded
          dark
          @click="borrarCuenta()"
        >
          <v-icon color="#FFC300" class="mr-1">
            mdi-close-octagon-outline
          </v-icon>
          Eliminar Cuenta
        </v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import api from "@/services/api";
import ProfileFavorite from "@/components/ProfileFavorite.vue";

import { RouterLink } from "vue-router";

export default {
  components: {
    ProfileFavorite,
  },
  name: "Button",
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
    borrarCuenta() {
      this.$router.push({ name: "delete" });
    },
  },
  data() {
    return {
      fav: [],
      users: {},
      favorites: [],
    };
  },
  async created() {
    const result = await api.getUser();
    this.users = result;
    this.favorites = await api.getfavorites();
  },
};
</script>

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
   
  font-weight: bold;
}
</style>
