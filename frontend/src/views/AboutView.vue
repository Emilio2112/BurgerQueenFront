<template>
  <v-container style="margin-top: 50px">
    <v-row>
      <v-cols cols="12" sm="5" md="4" class="mx-auto">
        <v-card  max-width="500" color="#001D3D">
          <v-list-item three-line class="amber--text text--darken-1 ml-4">
            <v-list-item-content>
              <div class="mb-4">Javier Cabrera</div>

              <v-list-item class="amber--text text--darken-1 ml-4"
                >Soy un desarrollador web Junior en proceso de aprendizaje.
                Estudie sistemas de telecomunicaciones, soy un apasionado por
                los videojuegos, me encanta escribir y leer.</v-list-item
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="180" color="grey">
              <v-img src="@/img/photo_2020-10-17_09-16-32.jpg"> </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>
              <a
                href="https://github.com/Tommyscripts"
                class="amber--text text--darken-1 ml-4"
                >GitHub</a
              >
            </v-btn>
            <v-btn outlined rounded text>
              <a
                href="https://www.linkedin.com/in/javierescoz/"
                class="amber--text text--darken-1 ml-4"
                >Linkedin</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card max-width="500" color="#001D3D">
          <v-list-item three-line class="amber--text text--darken-1 ml-4">
            <v-list-item-content>
              <div class="mb-4">Javier Cabrera</div>

              <v-list-item class="amber--text text--darken-1 ml-4"
                >Soy un desarrollador web Junior en proceso de aprendizaje.
                Estudie sistemas de telecomunicaciones, soy un apasionado por
                los videojuegos, me encanta escribir y leer.</v-list-item
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="180" color="grey">
              <v-img src="@/img/photo_2020-10-17_09-16-32.jpg"> </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>
              <a
                href="https://github.com/Tommyscripts"
                class="amber--text text--darken-1 ml-4"
                >GitHub</a
              >
            </v-btn>
            <v-btn outlined rounded text>
              <a
                href="https://www.linkedin.com/in/javierescoz/"
                class="amber--text text--darken-1 ml-4"
                >Linkedin</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card max-w max-width="500" color="#001D3D">
          <v-list-item three-line class="amber--text text--darken-1 ml-4">
            <v-list-item-content>
              <div class="mb-4">Javier Cabrera</div>

              <v-list-item class="amber--text text--darken-1 ml-4"
                >Soy un desarrollador web Junior en proceso de aprendizaje.
                Estudie sistemas de telecomunicaciones, soy un apasionado por
                los videojuegos, me encanta escribir y leer.</v-list-item
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="180" color="grey">
              <v-img src="@/img/photo_2020-10-17_09-16-32.jpg"> </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>
              <a
                href="https://github.com/Tommyscripts"
                class="amber--text text--darken-1 ml-4"
                >GitHub</a
              >
            </v-btn>
            <v-btn outlined rounded text>
              <a
                href="https://www.linkedin.com/in/javierescoz/"
                class="amber--text text--darken-1 ml-4"
                >Linkedin</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-cols>
    </v-row>
    <v-spacer> </v-spacer>

    <v-row>
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
      <RouterLink :to="{ name: 'home' }" style="text-decoration: none">
        <v-btn
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1 ml-4"
          rounded
          dark
        >
          <v-icon color="#FFC300" class="mr-1"> mdi-home</v-icon>
          Home
        </v-btn>
      </RouterLink>
    </v-row>
  </v-container>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
