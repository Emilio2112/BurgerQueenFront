<template>
  <v-row>
    <v-col cols="12" sm="10" md="6" class="mx-auto">
      <v-card class="pa-4">
        <v-card-title id="text">Login</v-card-title>
        <v-text-field
          label="Email"
          placeholder="Email"
          :rules="emailRules"
          v-model="email"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="Password"
          :type="visible ? 'text' : 'password'"
          :rules="passwordRules"
          placeholder="Password"
          v-model="password"
          filled
          rounded
          dense
          :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="visible = !visible"
        ></v-text-field>
        <v-card-actions>
          <v-btn
            id="text"
            elevation="2"
            color="#001D3D"
            class="amber--text text--darken-1"
            rounded
            dark
            @click.prevent="userLogin"
            @keydown.enter="userLogin"
          >
            <v-icon color="#FFC300"> mdi-check </v-icon>
            Aceptar
          </v-btn>
          <v-spacer></v-spacer>

          <RouterLink :to="{ name: 'signup' }" style="text-decoration: none">
            <v-btn
              id="text"
              elevation="2"
              color="#001D3D"
              class="amber--text text--darken-1"
              rounded
              dark
            >
              <v-icon color="#FFC300"> mdi-account-outline </v-icon>
              Nueva Cuenta
            </v-btn>
          </RouterLink>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            id="text"
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
    </v-col>
  </v-row>
</template>

<script>
import { RouterLink } from "vue-router";
import api from "@/services/api";
import { useAuthStore } from "@/stores/store";
export default {
  data() {
    return {
      visible: false,
      email: "",
      password: "",
      error: "",

      authStore: useAuthStore(),
    };
  },
  methods: {
    async userLogin() {
      const user = {
        email: this.email,
        password: this.password,
      };
      const respond = await api.login(user);
      if (respond.error) {
        alert("password or email wrong");
      } else {
        this.authStore.login(respond.token, respond.email);
        this.$router.push({ name: "home" });
      }
    },
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
