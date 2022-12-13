<template>
<<<<<<< HEAD
  <v-col cols="6" class="mt-10 mx-auto">
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
    <v-btn @click.prevent="addNewRest" @keydown.enter.prevent="addNewRest">Añadir</v-btn>
  
  </v-col>
=======
  <v-card class="mt-10 mx-auto">
    <v-card-title>Nuevo Restaurante</v-card-title>
    <v-col cols="12">
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
      <v-btn @click.prevent="addNewRest" @keydown.enter.prevent="addNewRest"
        >Añadir</v-btn
      >
    </v-col>
  </v-card>
>>>>>>> 9eedb2aff4e973d27187a6d86f4b3f4918ae4e2c
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
        alert("Error creating ship");
      } else {
        this.$router.push({ name: "restaurant" });
      }
    },
  },
};
</script>

<style scoped></style>
