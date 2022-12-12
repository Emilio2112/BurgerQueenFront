<template>
  <div>
        {{username}}
    <v-btn elevation="2" color="#001D3D" class="v-spacer mb-6 amber--text text--darken-1 mt-10 " rounded dark >
      <v-icon color="#FFD60A0" class="mr-1"> mdi-pencil </v-icon>
      Editar
    </v-btn>

    <br>
    <v-list-item-title class="text-h5 indigo--text text--darken-4" > My crush </v-list-item-title>
    <br>

  <v-card class="mx-auto"  max-width="344" outlined color="#001D3D">
    <v-list-item three-line>
        <v-list-item-content>
        <div class="text-overline mb-6 amber--text">Red Smoke
        </div>

        <v-list-item-title class="text-h9 mb-1 amber--text" >
            Rockabilly Venegas
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar  tile size="80"  >
        <v-img src="https://fastly.4sqi.net/img/general/600x600/592232052_x_CjIOIhjjYloKlglKOxM5vifzCxr-ECboqu-nc7Plc.jpg" ></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
    </v-card-actions>
  </v-card>
  <br>
  <v-card class="mx-auto"  max-width="344" outlined color="#001D3D">
    <v-list-item three-line>
        <v-list-item-content>
        <div class="text-overline mb-6 amber--text">The Newcomer</div>

        <v-list-item-title class="text-h9 mb-1 amber--text" >
            Dara Veggie
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar  tile size="80"  >
        <v-img src="https://200gramos.com/wp-content/uploads/2022/08/Dara_Vegetal_Burger.webp" ></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
    </v-card-actions>
  </v-card>
  <br>
    <v-list-item-title class="text-h5 indigo--text text--darken-4" > Mis criticas </v-list-item-title>
    <br>
    <v-card class="mx-auto"  max-width="344" outlined color="#001D3D">
    <v-list-item three-line>
        <v-list-item-content>
        <div class="text-overline mb-6 amber--text">Red Smoke
        </div>

        <v-list-item-title class="text-h9 mb-1 amber--text" >
            Rockabilly Venegas
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar  tile size="80"  >
        <v-img src="https://fastly.4sqi.net/img/general/600x600/592232052_x_CjIOIhjjYloKlglKOxM5vifzCxr-ECboqu-nc7Plc.jpg" ></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
    </v-card-actions>
  </v-card>
  <br>
  <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1 ml-4" rounded dark @click="retroceder()">
    <v-icon color="#FFC300" class="mr-1"> mdi-arrow-left</v-icon>
    Volver
  </v-btn>

  <v-btn elevation="2" color="#001D3D" class="amber--text text--darken-1 ml-5" rounded dark @click="borrarCuenta()">
    <v-icon color="#FFC300" class="mr-1 ">  mdi-close-octagon-outline </v-icon>
    Eliminar Cuenta
  </v-btn>
  <br />
  <br />
  <br />
  <br />
  </div>

</template>

<script>
export default {
  name: "Button",
  methods: {
   retroceder(){
     window.history.back();
   },
   borrarCuenta(){
    this.$router.push({name:"delete"})
   }
}
};

</script>

<style scoped></style>
