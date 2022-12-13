<template>
  <div class="amber">
    <br />
    <br />
    <br />
    <v-list-item-title class="text-h5 mb-1 font-weight-bold text-center">
      ¿De verdad quieres dejarnos?
    </v-list-item-title>
    <br />
    <br />
    <br />
    <br />

    <v-img
      src="https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/302141399_504624418337266_2543582150074936248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=s4-qaz0FwhcAX9zU2vc&tn=HtKZONxORLSxluHn&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfAoGCklXZJQnug9Bn4GELhOABvRsyM7DYe86S1ctThHGQ&oe=639BF5FD"
    >
    </v-img>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <v-card-actions>
        <v-spacer></v-spacer>
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1 "
        rounded
        dark
        @click="retroceder()"
      >
        <v-icon color="#FFC300" class="mr-1">
          mdi-close-octagon-outline
        </v-icon>
        NO
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        elevation="2"
        color="#001D3D"
        class="amber--text text--darken-1 "
        rounded
        dark
        @click="deleteUser()"
      >
        <v-icon color="#FFC300" class="mr-1"> mdi-alpha-v-box-outline </v-icon>
        SI
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>

    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import  api  from "@/services/api";
export default {
  data: () => ({
    api: api()
  }),
  methods: {
   retroceder(){
    this.$router.push(-1)
   },
 async  deleteUser(){
  
  await  api.deleteUser()
  this.$router.push({name:"despedida"})
   }
}
}
</script>

<style scoped></style>
