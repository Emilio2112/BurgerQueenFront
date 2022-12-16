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

          <v-card-title class="black--text" center space-between >
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
        <v-row>
          <v-col
          v-for="(favs,idx) in favorites" :key="idx" cols="12" sm="5" md="4">

          <ProfileFavorite :fav="favs"/>

          </v-col>
        </v-row>
            
        <br>
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
import ProfileFavorite from "@/components/ProfileFavorite.vue"

import { RouterLink } from "vue-router";

export default {
  components:{
    ProfileFavorite
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
      fav:[],
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

<style scoped></style>
