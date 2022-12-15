<template>
  <div>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <v-row>
          <v-btn
            elevation="2"
            color="#001D3D"
            class="mb-6 amber--text text--darken-1"
            rounded
            dark
            :to="{ name: 'editar' }"
          >
            <v-icon color="#FFD60A0" class="mr-1"> mdi-pencil </v-icon>
            Editar
          </v-btn>
          <v-card-title class="black--text" center space-between>
            {{ users.name }}
          </v-card-title>
          <v-card-title class="black--text" center space-between>
            {{ users.email }}
          </v-card-title>
        </v-row>
      </v-col>
    </v-row>
    <v-list-item-title class="text-h5 indigo--text text--darken-4">
          My crush
        </v-list-item-title>
        <br />
        <br />
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
  <div v-for="favs in favorites">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
 
            <v-card-title>
              {{ favs.name }}
            </v-card-title>
          <v-card-text>
            {{favs.restaurant.name}}
          </v-card-text>
        </div>

       
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <v-img :src="favs.photo">
              
            </v-img>
    </v-list-item-avatar>
    </v-list-item>
  </div>
  </v-card>
    <v-list-item-title class="text-h5 indigo--text text--darken-4">
      Mis criticas
    </v-list-item-title>

    <br />
    <v-btn
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

    <v-btn
      elevation="2"
      color="#001D3D"
      class="amber--text text--darken-1 ml-5"
      rounded
      dark
      @click="borrarCuenta()"
    >
      <v-icon color="#FFC300" class="mr-1"> mdi-close-octagon-outline </v-icon>
      Eliminar Cuenta
    </v-btn>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import api from "@/services/api";

import { RouterLink } from "vue-router";

export default {
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
      users: {},
      favorites: [],
    };
  },

  async created() {
    const result = await api.getUser();
    console.log(result);
    this.users = result;
    const favs = await api.getfavorites();
    this.favorites = favs;
  },
};
</script>

<style scoped></style>
