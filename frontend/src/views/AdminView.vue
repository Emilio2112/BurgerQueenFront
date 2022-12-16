<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="5" md="3">
       <!--  <v-card width="256" class="mt-6"> -->
          <!-- <v-navigation-drawer permanent rigth> -->
            <!-- <v-system-bar></v-system-bar> -->
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    {{user}}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >{{email}}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group color="primary">
                <v-list-item @click.prevent="setHome()">
                  <v-list-item-icon>
                    <v-icon>mdi-shield-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Inicio</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item @click.prevent="setAddRest()">
                  <v-list-item-icon>
                    <v-icon>mdi-home-plus-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Añadir Restaurante</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

    <!--             <v-list-item @click.prevent="setUpRest()">
                  <v-list-item-icon>
                    <v-icon>mdi-home-edit-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >Actualizar Restaurante</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item> -->

                <v-list-item @click.prevent="setBurger()">
                  <v-list-item-icon>
                    <v-icon>mdi-hamburger-plus</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Añadir Hamburguesa</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item @click.prevent="setAdmin()">
                  <v-list-item-icon>
                    <v-icon>mdi-security</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Set Admin</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
      <!--     </v-navigation-drawer> -->
       <!--  </v-card> -->
      </v-col>
      <AdminHome v-if="home" />
      <CreateRestaurant v-if="restaurant" />
     <!--  <UpdateRestaurant v-if="updateRest" /> -->
      <CreateBurger v-if="burger" />
      <AdminSignupVue v-if="admin" />
    </v-row>
  </v-container>
</template>

<script>
import api from "@/services/api";
import { useAuthStore } from "@/stores/store";
import CreateRestaurant from "@/components/CreateRestaurant.vue";
import UpdateRestaurant from "@/components/UpdateRestaurant.vue";
import CreateBurger from "@/components/CreateBurger.vue";
import AdminSignupVue from "@/components/AdminSignup.vue";
import AdminHome from "@/components/AdminHome.vue";
export default {
  components: {
    CreateRestaurant,
    UpdateRestaurant,
    CreateBurger,
    AdminSignupVue,
    AdminHome
  },
  data() {
    return {
      user:"",
      email:"",
      home: true,
      restaurant: false,
      updateRest: false,
      burger: false,
      updateBurger: false,
      admin: false,
      store: useAuthStore()
    };
  },
  methods: {
    setAddRest() {
      if(!this.restaurant){
      this.restaurant = !this.restaurant
      this.burger = false
      this.home = false
      this.updateRest = false
      this.admin = false}

    },
    setBurger() {
      if(!this.burger){
      this.burger = !this.burger;
      this.restaurant = false
      this.home = false
      this.updateRest = false
      this.admin = false}
    },
    setHome() {
      if(!this.home){
      this.home = !this.home;
      this.restaurant = false
      this.burger = false
      this.updateRest = false
      this.admin = false
    }
    },
    setUpRest() {
      if(!this.updateRest){
      this.updateRest = !this.updateRest;
      this.restaurant = false
      this.burger = false
      this.home = false
      this.admin = false}
    },
    setAdmin() {
      if(!this.admin){
      this.admin = !this.admin;
      this.restaurant = false
      this.burger = false
      this.home = false
      this.updateRest = false}
    },
  },
  async created() {
    this.email = this.store.email
    const userA = await api.getUser(this.store.token)
    this.user = userA.name
  }
};
</script>

<style scoped></style>
