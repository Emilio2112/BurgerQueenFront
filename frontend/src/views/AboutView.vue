<template>
  <div style="margin-top: 50px">
    <template>
  <v-card
    class="mx-auto"
    max-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Javier Cabrera
        </div>

        <v-list-item-subtitle>Soy un desarrollador web Junior en proceso de aprendizaje.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey">
        
    </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        <a href="https://github.com/Tommyscripts">GitHub</a>
      </v-btn>
      <v-btn
        outlined
        rounded
        text
      >
        <a href="https://www.linkedin.com/in/javierescoz/">Linkedin</a>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
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
      this.$router.go(-1)
    },
  },
};
</script>

<style scoped></style>
