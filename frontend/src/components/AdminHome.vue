<template>
  <v-col cols="6" class="mt-10 mx-auto">
      Hoy es:  {{getDate}}
      <ImageUploadVue/>

  </v-col>
</template>

<script>
import ImageUploadVue from './ImageUpload.vue'
  export default {
    components: {
      ImageUploadVue
    },
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