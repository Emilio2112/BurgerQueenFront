<template>

  <v-row>
    <v-app-bar
      color="#001d3d"
      app
      >
      <v-app-bar-nav-icon class="amber--text text--darken-1" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="amber--text text--darken-1">Title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute top temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
};
</script>

<style scoped>
.text {
  color: #ffc300;
}
</style>
