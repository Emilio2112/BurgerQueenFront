<template>
<v-col cols="12">
    <v-card class="mx-auto" outlined color="#001D3D" :to="{ path: `/burger/${fav._id}` }">
      <div>
        <v-list-item>
          <v-list-item-content class="text-h9 mb-1 amber--text">
            <div>
              <v-card-title id="text">
                {{ fav.name }}
              </v-card-title>
              <v-card-text id="text">
                {{ fav.restaurant.name }}
              </v-card-text>
            </div>
          </v-list-item-content>
          <v-list-item-avatar size="80" color="grey">
            <v-img :src="fav.photo"> </v-img>
          </v-list-item-avatar>
        </v-list-item>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import api from "@/services/api";

export default {
  props: {
    fav: Object,
  },
  data() {
    return {
      users: {},
      favorites: [],
    };
  },
  async created() {
    const result = await api.getUser();
    this.users = result;
    const favs = await api.getfavorites();
    this.favorites = favs;
  },
};
</script>

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
  font-size: calc(16px+1vw);
  font-weight: bold;
}
</style>
