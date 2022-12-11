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
    <v-navigation-drawer v-model="drawer" absolute top temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title
              ><RouterLink :to="{ name: 'home' }"> Home </RouterLink>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><RouterLink :to="{ name: 'ranking' }"> Ranking </RouterLink>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><RouterLink :to="{ name: 'login' }"> Login </RouterLink></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><RouterLink :to="{ name: 'about' }"> About Us </RouterLink></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-row>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.text {
  color: #ffc300;
}
</style>
