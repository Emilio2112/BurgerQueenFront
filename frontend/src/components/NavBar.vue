<template>
  <v-row>
    <v-app-bar color="#001d3d" app>
      <v-app-bar-nav-icon
        class="amber--text text--darken-1"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="amber--text text--darken-1"
        >Burger Queen</v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      color="#001D3D"
      fixed
      top
      temporary
      height="fit-content"
      class="mt-14"
    >
      <v-list nav dense elevation="2">
        <v-list-item-group color="#001D3D" v-model="group">
          <v-list-item
            class="amber--text text--darken-1"
            rounded
            dark
            :to="{ name: 'home' }"
          >
            Home
          </v-list-item>
          <v-list-item
            class="amber--text text--darken-1"
            rounded
            dark
            :to="{ name: 'burgers' }"
          >
            Hamburguesas
          </v-list-item>

          <v-list-item
            class="amber--text text--darken-1"
            rounded
            dark
            :to="{ name: 'restaurant' }"
          >
            Restaurantes
          </v-list-item>

          <v-list-item
            color="#001D3D"
            class="amber--text text--darken-1"
            rounded
            dark
            :to="{ name: 'about' }"
          >
            About Us
          </v-list-item>

          <div v-if="!store.isLoggedIn">
            <v-list-item
              class="amber--text text--darken-1"
              rounded
              dark
              :to="{ name: 'login' }"
            >
              Login
            </v-list-item>
          </div>
          <div v-if="rol === auth && store.isLoggedIn">
            <v-list-item
              class="amber--text text--darken-1"
              rounded
              dark
              :to="{ name: 'soloadmin' }"
            >
              Admin Site
            </v-list-item>
          </div>
          <div v-if="store.isLoggedIn">
            <v-list-item
              class="amber--text text--darken-1"
              rounded
              dark
              :to="{ name: 'profile' }"
            >
              Profile
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item
              class="amber--text text--darken-1"
              rounded
              dark
              @click="logout()"
            >
              Log Out
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-row>
</template>

<script>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/store";
import api from "@/services/api";

export default {
  data: () => ({
    drawer: false,
    group: null,
    store: useAuthStore(),
    auth: "admin"
  }),
  props:{
    rol:String
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push({ name: "home" });
    },
  },

};
</script>

<style scoped>
.text {
  color: #ffc300;
}
</style>
