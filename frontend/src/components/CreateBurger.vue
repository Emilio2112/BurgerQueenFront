<template>
  <v-col cols="12" sm="7" class="mt-10 mx-auto">
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
    <!--       <v-text-field
        label="Restaurante"
        :rules="rules"
        v-model="newBurger.restaurant"
      >
      </v-text-field> -->
    <v-select
      :items="getName"
      label="Restaurante"
      v-model="newBurger.restaurant"
    >
    </v-select>
    <v-select
      :items="items"
      label="Estilo"
      v-model="newBurger.style"
    ></v-select>
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
    <v-text-field
      name="input"
      label="Rating"
      v-model="newBurger.rating"
    ></v-text-field>
    <v-btn
      elevation="2"
      color="#001D3D"
      class="amber--text text--darken-1"
      rounded
      dark
      @click.prevent="addNewBurger"
      @keydown.enter.prevent="addNewBurger"
      >Añadir</v-btn
    >
  </v-col>
</template>

<script>
import burger from "@/services/burgers";
import restaurant from "@/services/restaurant";


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
        rating: "",
      },
      restaurants: [],
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  methods: {
    async addNewBurger() {
      this.restaurants.filter((el) => {
        if (el.name === this.newBurger.restaurant) {
          this.newBurger.restaurant = el.id;
          //return this.newBurger
        }
      });
      const response = await burger.addBurger(this.newBurger);
      if (response === "error") {
        alert("Error creating burger");
      } else {
        this.$router.push({ name: "burgers" });
      }
    },
  },
  async created() {
    const result = await restaurant.getRestaurants();
    //this.restaurants = result;
    result.map((el) => {
      const rest = {};
      rest.name = el.name;
      rest.id = el._id;
      this.restaurants.push(rest);
    });
    console.log(this.restaurants);
  },
  computed: {
    getName() {
      const name = [];
      this.restaurants.map((el) => {
        name.push(el.name);
      });
      return name;
    },
  },
};
</script>

<style scoped></style>
