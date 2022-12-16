<template>
  <!--   <v-file-input
    label="File input"
    accept="image/*"
    prepend-icon="mdi-camera"
  ></v-file-input> -->
  <div>
    <v-card>
      <div class="helldo">
        <input type="file" @change="onFileSelected" />
        <v-btn
          elevation="2"
          color="#001D3D"
          class="amber--text text--darken-1"
          rounded
          dark
          v-if="displayUploadBtn"
          outlined
          @click="uploadFile"
        >
          Upload
        </v-btn>
      </div>
      <v-tabs color="deep-purple accent-4" right>
        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <v-img
                  :src="`https://res.cloudinary.com/burgerproject/image/upload/`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { useAuthStore } from "@/stores/store";

export default {
  name: "home",
  data() {
    return {
          displayUploadBtn: false,
    selectedFile: null,
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/burgerproject/upload",
    CLOUDINARY_PRESET: "burgerqueen", //your Cloudinary preset
    store: useAuthStore()
    }
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.displayUploadBtn = true;
    },

    uploadFile() {
      let file = this.selectedFile;
      let formData = new FormData();

      console.log(file);

      formData.append("file", file);
      formData.append("upload_preset", this.CLOUDINARY_PRESET);

      axios({
        url: this.CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });


/*       axios({
        url: this.CLOUDINARY_URL,
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }); */

    },
  },
};
</script>

<style scoped></style>
