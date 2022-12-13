<template>
  <div style="margin-top: 50px">
    about page
    <v-card-actions>
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
    </v-card-actions>
  </div>
</template>

<script>
export default {
  methods: {
    retroceder() {
      window.history.back();
    },
  },
};
</script>

<style scoped></style>
