<template>
  <div>
    <v-card class="mt-10">
      <br>
      <v-text-field
        label="Username"
        placeholder="Username"
        filled
        rounded
        aria-required="true"
        dense
        v-model="newData.username"
      ></v-text-field>
      <v-text-field
        label="Email"
        placeholder="Email"
        filled
        rounded
        aria-required="true"
        dense
        v-model="newData.email"
      ></v-text-field>
      <v-text-field
        label="Password"
        :type="visible ? 'text' : 'password'"
        placeholder="Password"
        filled
        rounded
        dense
        aria-required="true"
        :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="visible = !visible"
        v-model="newData.password"
      ></v-text-field>
      <v-text-field
        label="Confirmar Password"
        :type="visible ? 'text' : 'password'"
        placeholder="Password"
        filled
        rounded
        dense
        aria-required="true"
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
          @click="updateUsers()"
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
  </div>
</template>

<script>
import api from "@/services/api";
export default {
  data() {
    return {
      visible: false,
      newData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    retroceder() {
      this.$router.go(-1)
    },
    async updateUsers() {
    const respond = await api.updateUser(this.newData);
    if (respond==="error") {
      console.log("No se pudo actualizar");
    } else {
      this.$router.push({ name: "profile" });
    }
  },
  },
    async created(){
      const respond = await api.getUser();
      this.newData.username= respond.username
      this.newData.email= respond.email
      this.newData.password= respond.password
    }
};
</script>

<style scoped></style>
