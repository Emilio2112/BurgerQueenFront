<template>
  <v-card class="mt-10 mx-auto">
    <v-card-title>Nueva Hamburguesa</v-card-title>
    <v-col class="mx-auto">
      <v-text-field
        label="Nombre"
        :rules="rules"
        hide-details="auto"
        v-model="newBurger.name"
      ></v-text-field>
      <v-text-field
        label="Foto"
        :rules="rules"
        v-model="newBurger.photo"
      ></v-text-field>
      <v-text-field
        label="Restaurante"
        :rules="rules"
        v-model="newBurger.restaurant"
      ></v-text-field>
      <v-select :items="items" label="Estilo" v-model="newBurger.style"></v-select>
      <v-textarea
        name="input"
        filled
        label="Descripción"
        rows="3"
        auto-grow
        counter
        clearable
        background-color="white"
        v-model="newBurger.description"
      ></v-textarea>
      <v-btn @click.prevent="addNewBurger" @keydown.enter.prevent="addNewBurger"
        >Añadir</v-btn
      >
    </v-col>
  </v-card>
</template>

<script>
import burger from "@/services/burgers";

export default {
  data() {
    return {
      items: ["Normal", "Cheese Burger", "Pollo", "Veggie", "Smash", "Gourmet"],
      newBurger: {
        name: "",
        photo: "",
        restaurant: "",
        style: "",
        description: "",
      },
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  methods: {
    async addNewBurger() {
      const response = await burger.addBurger(this.newBurger);
      if (response === "error") {
        alert("Error creating burger");
      } else {
        this.$router.push({ name: "burgers" });
      }
    },
  },
};
</script>

<style scoped></style>
