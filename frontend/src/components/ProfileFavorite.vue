<template>

    <v-card class="mx-auto" max-width="344" outlined color="#001D3D">
      <div>
        <v-list-item three-line>
          <v-list-item-content class="text-h9 mb-1 amber--text">
            <div class="text-overline mb-4">
              <v-card-title>
                {{ fav.name }}
              </v-card-title>
              <v-card-text>
                {{ fav.restaurant.name }}
              </v-card-text>
            </div>
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey">
            <v-img :src="fav.photo"> </v-img>
          </v-list-item-avatar>
        </v-list-item>
      </div>
    </v-card>

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

<style scoped></style>
