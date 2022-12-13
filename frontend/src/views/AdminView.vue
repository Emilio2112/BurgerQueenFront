<template>
<div>
      <CreateRestaurant />
    <UpdateRestaurant />
</div>


</template>

<script>
import CreateRestaurant from '@/components/CreateRestaurant.vue';
import UpdateRestaurant from '@/components/UpdateRestaurant.vue';

  export default {
   components:{
    CreateRestaurant,
    UpdateRestaurant
   } 
  }
</script>

<style scoped>

</style>