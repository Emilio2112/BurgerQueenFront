<template>
  <div>
    <v-col cols="12" sm="8" md="6" class="mx-auto">
      <v-container class="mt-1 pt-5">
        <v-vcard-title class="px-10">Mis Datos:</v-vcard-title>
        <v-text-field
          class="mt-5 px-5"
          label="Username"
          placeholder="Username"
          filled
          rounded
          aria-required="true"
          dense
          v-model="newData.username"
        ></v-text-field>
        <v-text-field
          class="px-5"
          label="Email"
          placeholder="Email"
          filled
          rounded
          aria-required="true"
          dense
          v-model="newData.email"
        ></v-text-field>
        <v-text-field
          class="px-5"
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
          class="px-5"
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
        <v-row class="px-9 mt-1">
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
          <v-spacer></v-spacer>
          <PopUpVue :data="newData" />
        </v-row>
        <!--         <v-btn
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1"
          rounded
          dark
          @click="updateUsers()"
        >
          <v-icon color="#FFC300"> mdi-check </v-icon>
          Aceptar
        </v-btn> -->
      </v-container>
    </v-col>
  </div>
</template>

<script>
import api from "@/services/api";
import PopUpVue from "@/components/PopUp.vue";

export default {
  components: {
    PopUpVue,
  },
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
      this.$router.go(-1);
    },
    async updateUsers() {
      const respond = await api.updateUser(this.newData);
      if (respond === "error") {
        console.log("No se pudo actualizar");
      } else {
        this.$router.push({ name: "profile" });
      }
    },
  },
  async created() {
    const respond = await api.getUser();
    this.newData.username = respond.username;
    this.newData.email = respond.email;
    this.newData.password = respond.password;
  },
};
</script>

<style scoped></style>
