<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="burger.photo"></v-img>

    <v-card-title id="text"
      >{{ burger.name }}
      <v-spacer />
      <v-btn
        icon
        color="black"
        x-large
        @click="addFavorites()"
        v-show="!hidden"
      >
        <v-icon>mdi-heart-outline </v-icon>
      </v-btn>
      <v-btn icon color="red" x-large @click="removeFavorite()" v-show="hidden">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle id="text">
      {{ burger.style }}
    </v-card-subtitle>

    <v-card-text>
      <v-row class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">
        <v-btn  class="mx-1" fab dark small color="amber darken-1">
          <v-icon dark> mdi-silverware-fork-knife </v-icon>
        </v-btn>
        <v-sheet id="text"> {{ getRestName }}</v-sheet>
      </div>

      <div id="text">
        {{ burger.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-card-title id="text">Puntuación</v-card-title>

      <v-rating
        :value="burger.rating"
        color="amber"
        dense
        readonly
        half-increments
        x-large
      ></v-rating>
      <div id="text" class="grey--text ms-4">{{ burger.rating }}</div>
    </v-card-text>

    <v-card-actions>
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
      <v-spacer />
      <v-btn
        id="text"
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
      >
        <v-icon color="#FFC300" class="mr-1">mdi-comment-text-outline</v-icon>
        Comentar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import burger from "@/services/burgers";
import restaurant from "@/services/restaurant";
import api from "@/services/api";

export default {
  data() {
    return {
      burger: {},
      restaurants: [],
      hidden: false,
      fav: [],
    };
  },
  async created() {
    this.burger = await burger.getOneBurger(this.$route.params.id);
    const result = await restaurant.getRestaurants(
      this.burger.restaurant.toString()
    );
    this.restaurants = result;
    this.fav = await api.showFavoriteBurguer();
    if (this.fav.includes(this.burger._id)) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  },
  methods: {
    retroceder() {
      this.$router.go(-1);
    },

    async addFavorites() {
      this.hidden = !this.hidden;
      const respond = await api.addFavorite(this.burger._id);
      return respond;
    },
    async removeFavorite() {
      this.hidden = !this.hidden;
      const respond = await api.removeFavoriteBurger(this.burger._id);
      return respond;
    },
  },
  computed: {
    getRestName() {
      const restName = {};
      this.restaurants.filter((el) => {
        if (el._id === this.burger.restaurant.toString()) {
          restName.name = el.name;
        }
      });
      return restName.name;
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
