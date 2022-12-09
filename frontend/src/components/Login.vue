<template>
  <div>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-tittle class="pb-0">
        <h1>Login</h1>
      </v-card-tittle>
      <v-card-text>
        <v-form>
          <v-textfield 
            label="Email" 
            prepend-icon="mdi-account-circle" 
          />
          <v-textfield 
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
