<template>
  <v-col cols="12" sm="7" class="mt-10 mx-auto">
    <v-text-field
      label="Nombre"
      :rules="rules"
      hide-details="auto"
      v-model="newRestaurant.name"
    ></v-text-field>
    <v-text-field
      label="Dirección"
      :rules="rules"
      v-model="newRestaurant.address"
    ></v-text-field>
    <v-text-field
      label="Localidad"
      :rules="rules"
      v-model="newRestaurant.location"
    ></v-text-field>
    <v-text-field
      label="Teléfono"
      :rules="rules"
      v-model="newRestaurant.phone"
    ></v-text-field>
    <v-btn
      elevation="2"
      color="#001D3D"
      class="amber--text text--darken-1"
      rounded
      dark
      @click.prevent="addNewRest"
      @keydown.enter.prevent="addNewRest"
    >
      Añadir</v-btn
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
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  methods: {
    async addNewRest() {
      const response = await restaurant.addRestaurant(this.newRestaurant);
      if (response === "error") {
        alert("Error creating Restaurant");
      } else {
        this.$router.push({ name: "restaurant" });
      }
    },
  },
};
</script>

<style scoped></style>
