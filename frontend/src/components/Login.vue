<template>
  <v-card class="mt-10 ">
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
      :type="visible ?'text' : 'password'"
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
import api from '../services/api.js';
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      passwordRules: [
        (value) =>
          value.length >= 6 || "El Password debe tener más de 6 caracteres",
      ],
      visible: false,
      user: {
        email: '',
        password: ''
      },
      store: useAuthStore()
    };
  },
  methods: {
    async loginUser() {
      const data = await api.login(this.user)
      if (data.error) {
        alert(data.error)
      }
      else {
        this.store.login(data.token, data.email)
        this.$router.push({ name: 'home' })
      }
    }

  }
};
</script>

<style scoped></style>
