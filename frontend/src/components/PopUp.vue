<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1"
          rounded
          dark
          v-bind="attrs"
          v-on="on"
        >
          Aceptar
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Editar Datos
        </v-card-title>
        <v-card-text>
          Sus datos van a ser modificados, ¿Está seguro que quiere continuar?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            elevation="2"
            color="#001D3D"
            class="amber--text text--darken-1"
            rounded
            dark
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            elevation="2"
            color="#001D3D"
            class="amber--text text--darken-1"
            rounded
            dark
            @click.prevent="updateUsers()"
          >
            Aceptar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
    async updateUsers() {
      const respond = await api.updateUser(this.data);
      if (respond === "error") {
        console.log("No se pudo actualizar");
      } else {
        this.$router.push({ name: "profile" });
      }
    },
  },
};
</script>

<style scoped></style>
