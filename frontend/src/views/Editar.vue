<template>
  <div>

    <v-card class="">
      <br />
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
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          id="text"

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
      },
    };
  },
  methods: {
    retroceder() {
      this.$router.go(-1);
    },
    async updateUsers() {
    
      if (this.newData.username && this.newData.email) {
        const respond = await api.updateUser(this.newData);
      if (respond === "error") {
        console.log("No se pudo actualizar");
      } else {
        this.$router.push({ name: "profile" });
      }
        }
      if (!this.newData.username) {
        alert('Name required.');
      }
      if (!this.newData.email) {
        alert('Email required.');
      }
    },
   
  },
  async created() {
    const respond = await api.getUser();
    this.newData.username = respond.username;
    this.newData.email = respond.email;

  },
};
</script>

<style scoped>
#text {
  font-family: "Montserrat", sans-serif;
   
  font-weight: bold;
}
</style>
