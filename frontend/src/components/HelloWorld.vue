<template>

    <v-card class="back">
      <v-card-title>Burger Queen</v-card-title>
      <v-card-text id="color">
        Bienvenidos a la Web de <br />
        los amantes de las Hamburguesas!!
      </v-card-text>
    </v-card>

</template>

<script>
export default {};
</script>

<style scoped>
.back {
  background-image: url("https://www.goiko.com/wp-content/uploads/2017/12/SEVAL_Web_Desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffc300;
  height: 400px;
}
#color {
  color: #ffc300;
}

@media (min-width: 600px) {
  .back {
    background-position: center;
    height: 600px;
  }
}
</style>
