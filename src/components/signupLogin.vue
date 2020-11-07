<template>
  

    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="8" class="">
        <v-card class="evelation-12 card">
          <v-window v-model="step">
            <!--SignIn-->
            <v-window-item :value="1">
              <v-row class="">
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form" @submit.prevent="signin">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        Sign in
                      </h1>
                      <v-text-field
                        id="contactNumber"
                        v-model="contactNumber"
                        label="contactNumber"
                        name="contactNumber"
                        append-icon="phone"
                        type = "tel"
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        label="Password"
                        name="Password"
                        append-icon="lock"
                        type="password"
                        :color="bgColor"
                      />
                      <div class="text-center">
                        <a
                          href="#"
                          class="mt-3 overline no-text-decoration"
                          :class="`${bgColor}--text`"
                          @click="step = 3"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <v-container fluid>
                          
                          <v-radio-group
                            v-model="radios"
                            mandatory
                          >
                            <v-row>
                              <v-col>  
                                <v-radio
                                  label="Customer"
                                  value="1"
                                ></v-radio>
                              </v-col>
                              <v-col>
                                <v-radio
                                  label="Worker"
                                  value="2"
                                ></v-radio>
                              </v-col>
                            </v-row>
                          </v-radio-group>
                      </v-container>
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark
                          >Sign In</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">No User?</h1>
                      <h5 class="text-center overline mb-3">
                        Please Sign Up to continue
                      </h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 2">Sign Up</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!--SignUp-->
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">Already a user?</h1>
                      <h5 class="text-center overline mb-3">Please Sign In</h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">Sign In</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class=" pt-6 pb-6">
                  <v-card-text>
                    <h1
                      class="text-center display-1 mb-10"
                      :class="`${bgColor}--text`"
                    >
                      Sign Up
                    </h1>
                    <v-row dense>
                      
                    </v-row>
                    <v-form class="signup-form-form" @submit.prevent="signup">
                      <v-text-field
                        id="fullName"
                        v-model="fullName"
                        label="Full Name"
                        name="fullName"
                        append-icon="person"
                        type="text"
                      />
                      <v-text-field
                        id="email"
                        v-model="email"
                        label="eMail"
                        name="email"
                        append-icon="email"
                        type="email"
                      />
                      <v-text-field
                        id="contactNumber"
                        v-model="contactNumber"
                        label="contactNumber"
                        name="contactNumber"
                        append-icon="phone"
                        type = "tel"
                    
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        label="Password"
                        name="password"
                        append-icon="lock"
                        type="password"
                      />
                      
                      
                      <v-container fluid>
                          
                          <v-radio-group
                            v-model="radios"
                            mandatory
                          >
                            <v-row>
                              <v-col>  
                                <v-radio
                                  label="Customer"
                                  value="1"
                                ></v-radio>
                              </v-col>
                              <v-col>
                                <v-radio
                                  label="Worker"
                                  value="2"
                                ></v-radio>
                              </v-col>
                            </v-row>
                          </v-radio-group>
                      </v-container>
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark>
                          Sign Up</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
            <!--PW Rest-->
            <v-window-item :value="3">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">Already a user?</h1>
                      <h5 class="text-center overline mb-3">Please Sign In</h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">Sign In</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        Reset Password
                      </h1>
                      <v-text-field
                        id="login"
                        v-model="login"
                        label="Username / eMail"
                        name="login"
                        append-icon="person / email"
                        type="text"
                        :color="bgColor"
                        class="v-input__icon--double"
                      />
                      <div class="text-center mt-6">
                        <v-btn large :color="bgColor" dark
                          >Reset Password</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>

</template>

<script>
// import Notification from './Notification'
import axios from 'axios';
export default {
  name: 'Signupform',
  // components: {
  //   Notification
  // },
  props: {
    source: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'indigo'
    },
    fgColor: {
      type: String,
      default: 'white'
    }
  },
  async fetch({ store, error }, user) {
    try {
      await store.dispatch('users/signupUser', user)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to sign up user. Please try again later.'
      })
    }
  },
  data: () => ({
    step: 1,
    fullName: '',
    email: '',
    password: '',
    contactNumber : '',
    radios : '',
    login: '',
    snackbarType: 'success',
    snackbarMessage: '',
    snackbar: false
  }),
  methods: {
    async signup() {
      let isBuyer = false;
          if(this.radios == '1')
            isBuyer = true;

         let response = await axios.post("http://localhost:3000/api/auth/signup", {
        
            contactNumber: this.contactNumber,
            password: this.password,
            fullName : this.fullName,
            email : this.email,
            isBuyer : isBuyer
          
        });
        console.log(response.data);
      
    },
    async signin() {
      try {
          let isBuyer = false;
          if(this.radios == '1')
            isBuyer = true;

         let response = await axios.post("http://localhost:3000/api/auth/signin", {
        
            contactNumber: this.contactNumber,
            password: this.password,
            isBuyer : isBuyer
          
        });
        console.log(response.data);
        this.snackbarType = response.data.type
        this.snackbarMessage = response.data.message
        this.snackbar = true
      } catch (err) {
        this.snackbarType = 'error'
        this.snackbarMessage = 'Error signing you in'
        this.snackbar = true
      }
    }
  }
}
</script>

<style scoped >
.v-input__icon--double .v-input__icon {
  margin-left: -4.25rem !important;
}
a.no-text-decoration {
  text-decoration: none;
}
/* #signinup-form {
  max-width: 75rem;
} */
.signup-form-form {
  max-width: 23rem;
  margin: 0 auto;
}
.card {
  overflow: hidden;
}
.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>