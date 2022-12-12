<template>
  <div>
    <v-card class="mt-10">
      <v-card-title>
        {{ burger.name }}
      </v-card-title>
    </v-card>
 
  </div>
</template>

<script>
export default {
  props: {
    burger: Object,
  },
};
</script>

<style scoped></style>
