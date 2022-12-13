<template>
<div>
      <CreateRestaurant />
    <UpdateRestaurant />
    <CreateBurger />
    <AdminSignupVue/>
</div>


</template>

<script>
import CreateRestaurant from '@/components/CreateRestaurant.vue';
import UpdateRestaurant from '@/components/UpdateRestaurant.vue';
import CreateBurger from '@/components/CreateBurger.vue';
import AdminSignupVue from '@/components/AdminSignup.vue';
  export default {
   components:{
    CreateRestaurant,
    UpdateRestaurant,
    CreateBurger,
    AdminSignupVue
   } 
  }
</script>

<style scoped>

</style>