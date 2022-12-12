<template>
  <v-card class="mt-10">
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
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1"
        rounded
        dark
        @click="userLogin"
      >
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
      <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1" rounded dark @click="retroceder()">
    <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
    Volver
  </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
import { RouterLink } from "vue-router";
import api from "@/services/api";
import { useAuthStore } from "@/stores/store";
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
          value.length >= 6 || "El Password debe tener mÃ¡s de 6 caracteres",
      ],
      visible: false,
      email: "",
      password: "",

      authStore: useAuthStore()
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
        console.log(respond.error);
      } else {
        this.authStore.login(respond.token, respond.email);
        this.$router.push({ name: "home" });
      }

     const respond =  await api.login(user)
     if(respond.error){
      console.log(respond.error)
     }else{
      this.authStore.login(respond.token, respond.email)
      this.$router.push({name:"home"})
     }
     },
     retroceder(){
     window.history.back();
  }
},

}

</script>

<style scoped></style>
