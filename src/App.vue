<template>
<v-app>
  <v-snackbar top
      v-model="snackbar"
      :timeout="2000"
    
      color="error"
    >
      {{ snackbarMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  <router-view></router-view>
</v-app>
</template>

<script>
import axios from "axios"
export default {
  data:()=>({
    snackbarMessage:"",
    snackbar:false
  }),
 mounted() {
   console.log("mounted")
    const ref=this
    if(sessionStorage.getItem('loginData'))
    axios.defaults.headers.common["authorization"] = sessionStorage.getItem('loginData').access_token;
    
    axios.interceptors.response.use(
      response => {

        return response;
      },
      function(error) {
        console.log(error)
         if (error.response) {
     ref.snackbar=true
    ref.snackbarMessage=error.response.data.message
      console.log(error.response.data);

    }  else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
        return Promise.reject(error);
      }
    );
  }
}
</script>

<style scoped>
div.v-snack:not(.v-snack--absolute) {
    height: 100%;
}
</style>