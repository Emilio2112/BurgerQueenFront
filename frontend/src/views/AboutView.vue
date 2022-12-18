<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card
          width="360px"
          min-width="360px"
          color="#001D3D"
          class="mb-10 mx-auto"
        >
          <v-list-item class="amber--text text--darken-1 ml-4">
            <v-list-item-content>
              <div class="mb-4">Javier Cabrera</div>

              <v-list-item class="amber--text text--darken-1"
                >Desarrollador web Junior en proceso de aprendizaje. <br />
                </v-list-item
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="100" color="grey">
              <v-img src="@/img/photo_2020-10-17_09-16-32.jpg"> </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>
              <v-icon color="#FFC300" class="mr-1"> mdi-github</v-icon>
              <a
                id="text"
                target="_blank"
                href="https://github.com/Tommyscripts"
                class="amber--text text--darken-1 ml-4"
                >GitHub</a
              >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined rounded text>
              <v-icon color="#FFC300" class="mr-1"> mdi-linkedin</v-icon>
              <a
                id="text"
                href="https://www.linkedin.com/in/javierescoz/"
                class="amber--text text--darken-1 ml-4"
                target="_blank"
                >Linkedin</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card
          width="360px"
          min-width="360px"
          color="#001D3D"
          class="mb-10 mx-auto"
        >
          <v-list-item class="amber--text text--darken-1 ml-4">
            <v-list-item-content>
              <div class="mb-4">Joaquín Gázquez San Emeterio</div>
              <v-list-item class="amber--text text--darken-1 ml-4">
                Desarrollador Full Stack en proceso de aprendizaje. </v-list-item
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="100" color="grey">
              <v-img
                src="https://res.cloudinary.com/burgerproject/image/upload/v1671203010/My%20images/lcof1vi12ufrytceucmd.jpg"
              >
              </v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined rounded text>
              <v-icon color="#FFC300" class="mr-1"> mdi-github</v-icon>
              <a
                id="text"
                href="https://github.com/Joaquingse"
                class="amber--text text--darken-1 ml-4"
                target="_blank"
                >GitHub</a
              >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined rounded text>
              <v-icon color="#FFC300" class="mr-1"> mdi-linkedin</v-icon>
              <a
                id="text"
                href="https://www.linkedin.com/in/joaquingse/"
                class="amber--text text--darken-1 ml-4"
                target="_blank"
              >
                Linkedin</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card
          width="360px"
          min-width="360px"
          color="#001D3D"
          class="mb-10 mx-auto"
        >
          <v-list-item class="amber--text text--darken-1 ml-4">
            <v-list-item-content>
              <div class="mb-4">Emilio Casado</div>

              <v-list-item class="amber--text text--darken-1"
                >Desarrollador Full Stack en proceso de aprendizaje.</v-list-item
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="100" color="grey">
              <v-img src="@/img/IMG20211208142252.jpg"> </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>
              <v-icon color="#FFC300" class="mr-1"> mdi-github</v-icon>
              <a
                id="text"
                href="https://github.com/Emilio2112"
                class="amber--text text--darken-1 ml-4"
                target="_blank"
                >GitHub</a
              >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined rounded text>
              <v-icon color="#FFC300" class="mr-1"> mdi-linkedin</v-icon>
              <a
                id="text"
                href="https://www.linkedin.com/in/emilio-casado-de-galdo-b5a576188/"
                class="amber--text text--darken-1 ml-4"
                target="_blank"
                >Linkedin</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        id="text"
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
      <v-spacer></v-spacer>
      <RouterLink :to="{ name: 'home' }" style="text-decoration: none">
        <v-btn
          id="text"
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

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
   
  font-weight: bold;
}
</style>
