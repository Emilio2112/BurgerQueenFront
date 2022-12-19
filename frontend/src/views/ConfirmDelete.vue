<template>
  <v-col cols="12" class="amber mx-auto">
    <v-row>
      <v-col cols="12" sm="6" class="mx-auto">
        <v-list-item-title class="text-h6 mb-1 font-weight-bold text-center">
          ¿De verdad quieres dejarnos?
        </v-list-item-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4" class="mx-auto">
        <v-img
          src="@/img/pulp fiction.jpg"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8"  class="mx-auto">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            elevation="2"
            color="#001D3D"
            class="amber--text text--darken-1"
            rounded
            dark
            @click="retroceder()"
          >
            <v-icon color="#FFC300" class="mr-1">
              mdi-close-octagon-outline
            </v-icon>
            NO
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            elevation="2"
            color="#001D3D"
            class="amber--text text--darken-1"
            rounded
            dark
            @click="deleteUser()"
          >
            <v-icon color="#FFC300" class="mr-1">
              mdi-alpha-v-box-outline
            </v-icon>
            SI
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import api from "@/services/api";
import { useAuthStore } from "@/stores/store";
export default {
  data: () => ({
    store: useAuthStore()
  }),
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
    async deleteUser() {    
      this.store.logout()
      this.store.roleCheck(null)
      await api.deleteUser();
      this.$router.push({ name: "despedida" });
    },
  },
};
</script>

<style scoped></style>
