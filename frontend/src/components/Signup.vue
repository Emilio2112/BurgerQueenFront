<template>
  <v-card class="mt-10">
    <v-text-field
      label="Nombre"
      placeholder="Nombre"
      filled
      rounded
      dense
    ></v-text-field>
    <v-text-field
      label="Username"
      placeholder="Username"
      filled
      rounded
      dense
    ></v-text-field>
    <v-text-field
      label="Email"
      placeholder="Email"
      :rules="passwordRules"
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
    <v-text-field
      label="Confirmar Password"
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
        <v-btn elevation="2" color="#001D3D" rounded dark>
          <v-icon color="#FFC300"> mdi-check </v-icon>
          Aceptar
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      passwordRules: [
        (value) =>
          value.length >= 8 || "El Password debe tener más de 8 caracteres",
      ],
      visible: false,
    };
  },
};
</script>

<style></style>
