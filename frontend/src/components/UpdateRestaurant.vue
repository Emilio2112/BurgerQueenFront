<template>
  <v-col cols="12" sm="7" class="mt-10 mx-auto">
    <v-text-field
      label="Nombre"
      hide-details="auto"
      v-model="newRestaurant.name"
    ></v-text-field>
    <v-text-field
      label="Dirección"
      v-model="newRestaurant.address"
    ></v-text-field>
    <v-text-field
      label="Localidad"
      v-model="newRestaurant.location"
    ></v-text-field>
    <v-text-field label="Teléfono" v-model="newRestaurant.phone"></v-text-field>
    <v-btn
      elevation="2"
      color="#001D3D"
      class="amber--text text--darken-1"
      rounded
      dark
      @click.prevent="upRestaurant"
      @keydown.enter.prevent="upRestaurant"
      >Actualizar</v-btn
    >
  </v-col>
</template>

<script>
import restaurant from "@/services/restaurant";

export default {
  data() {
    return {
      newRestaurant: {
        name: "",
        address: "",
        location: "",
        web: "",
        phone: "",
        burguers: [""],
      },
    };
  },
  methods: {
    async upRestaurant() {
      const response = await restaurant.updateRestaurant(this.newRestaurant);
      if (response === "error") {
        alert("Error creating ship");
      } else {
        this.$router.push({ name: "restaurant" });
      }
    },
  },
};
</script>

<style scoped></style>
