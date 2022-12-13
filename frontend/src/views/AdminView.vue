<template>
<div>
      <CreateRestaurant />
    <UpdateRestaurant />
    <CreateBurger />
</div>


</template>

<script>
import CreateRestaurant from '@/components/CreateRestaurant.vue';
import UpdateRestaurant from '@/components/UpdateRestaurant.vue';
import CreateBurger from '@/components/CreateBurger.vue';

  export default {
   components:{
    CreateRestaurant,
    UpdateRestaurant,
    CreateBurger
   } 
  }
</script>

<style scoped>

</style>