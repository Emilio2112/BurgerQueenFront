<template>
  <v-card class="mt-10">
   <v-card-title>
    Signup
   </v-card-title>

    <v-text-field
      label="Nombre"
      placeholder="Nombre"
      filled
      rounded
      dense
      v-model="newUser.name"
    ></v-text-field>
    <v-text-field
      label="Username"
      placeholder="Username"
      filled
      rounded
      dense
      v-model="newUser.username"
    ></v-text-field>
    <v-text-field
      label="Email"
      placeholder="Email"
      :rules="emailRules"
      filled
      rounded
      dense
      v-model="newUser.email"
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
      v-model="newUser.password"
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
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
        @click="signupUser()"
      >
        <v-icon color="#FFC300"> mdi-check </v-icon>
        Aceptar
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
        @click="retroceder()"
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
        Volver
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useAuthStore } from '@/stores/store';
import api from '@/services/api.js'

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
          value.length >= 6 || "El Password debe tener más de 6 caracteres",
      ],
      visible: false,
      newUser: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
    authStore: useAuthStore()
    };
  },
  methods: {
   retroceder(){
    this.$router.go(-1)
   },
   async signupUser() {
    const response = await api.signup(this.newUser)
    if (response.error) {
      alert("Error al crear cuenta")
    } else {
      this.authStore.login(response.token, response.email)
      this.$router.push({name: 'home'})
    }
   }
}

};
</script>

<style></style>
