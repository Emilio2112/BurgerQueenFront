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
    <v-navigation-drawer v-model="drawer" fixed top temporary height="fit-content" class="mt-14">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'home' }">
              Home</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'burgers' }">
              Hamburguesas</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'restaurant' }">
              Restaurantes</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'about' }">
              About Us</v-btn>
          </v-list-item>
          
          <div v-if="!store.isLoggedIn">

            <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'login' }">
              Login </v-btn>
          </v-list-item>
 
          </div>
          <div v-if="store.isLoggedIn">
            <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'soloadmin' }">
              Admin  </v-btn>
            </v-list-item>
          </div>
          <div v-if="store.isLoggedIn">
            <v-list-item>
            <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark :to="{ name: 'profile' }">
              Profile  </v-btn>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item>
              <v-btn
                elevation="2"
                color="#001D3D"
                class="amber--text text--darken-1"
                rounded
                dark
                @click="logout()"
              >
                Log Out
              </v-btn>
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
export default {
  data: () => ({
    drawer: false,
    group: null,
    store: useAuthStore(),
  }),
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
