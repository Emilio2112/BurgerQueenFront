<template>
  <div>
    <v-card class="mt-10">
      <v-text-field
        label="Username"
        placeholder="Username"
        filled
        rounded
        dense
        v-model="newData.username"
      ></v-text-field>
      <v-text-field
        label="Email"
        placeholder="Email"
        :rules="emailRules"
        filled
        rounded
        dense
        v-model="newData.email"

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
        v-model="newData.password"

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
          @click="updateUser()"
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
import api from '@/services/api'
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
      newData:{
        username:"",
        email:"",
        password:""
      }
    };
  },
  methods:{
    retroceder(){
     window.history.back();
   },
  },
  async  updateUser(){
    const respond = await  api.update(this.newData)
    if(respond.error){
      console.log(respond.error)
     }else{
      
      this.$router.push({name:"profile"})
     }

  this.$router.push({name:"profile"})
   }
};
</script>

<style scoped></style>
