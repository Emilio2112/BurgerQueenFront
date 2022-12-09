<template>
    <v-card width="400px" class="mt-10 mx-a">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Email" 
            prepend-icon="mdi-account-circle" 
          />
          <v-text-field 
            type="password" 
            label="Email" 
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
          />
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn color="succes">Register</v-btn>
        <v-spacer/>
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>

</template>

<script>
export default {};
</script>

<style scoped></style>
