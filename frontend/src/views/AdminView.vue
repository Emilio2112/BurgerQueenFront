<template>
  <div>
    <CreateRestaurant />
    <CreateBurger />
  </div>
</template>

<script>
import CreateRestaurant from '@/components/CreateRestaurant.vue';
import CreateBurger from '@/components/CreateBurger.vue';

  export default {
   components:{
    CreateRestaurant,
    CreateBurger
   } 
  }
</script>

<style scoped>

</style>