<template>
  <v-card class="mt-10">
    <v-text-field
      label="Email"
      placeholder="Email"
      :rules="emailRules"
      filled
      rounded
      dense
    ></v-text-field>
    <v-text-field
      label="Password"
      :type="visible ? 'text' : 'password'"
      :rules="passwordRules"
      placeholder="Password"
      filled
      rounded
      dense
      :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="visible = !visible"
    ></v-text-field>
    <v-card-actions>
      <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark>
        <v-icon color="#FFC300"> mdi-check </v-icon>
        Aceptar
      </v-btn>
      <v-spacer></v-spacer>
      <RouterLink :to="{ name: 'signup' }" style="text-decoration: none;">
      <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark> <v-icon color="#FFC300"> mdi-account-outline </v-icon>
         
         Nueva Cuenta
      </v-btn>
    </RouterLink>
    </v-card-actions>
    <v-card-actions>
      <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark>
    <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
    Volver
  </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      emailRules: [
        (value) => !!value || "Introduce tu email",
        (value) =>
          value.match(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) ||
          "Error en el email",
      ],
      passwordRules: [
        (value) =>
          value.length >= 8 || "El Password debe tener más de 8 caracteres",
      ],
      visible: false,
    };
  },
};
</script>

<style scoped></style>
