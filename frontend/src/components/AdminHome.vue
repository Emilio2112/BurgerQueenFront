<template>
  <v-col cols="6" class="mt-10 mx-auto">
      Hoy es:  {{getDate}}

  </v-col>
</template>

<script>
  export default {
    data () {
      return {
        date: "",
      }
    },
    computed : {
      getDate() {
       const day = new Date()
       this.date = day.toLocaleDateString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) 
       return this.date
      }
    }
  }
</script>

<style scoped>

</style>