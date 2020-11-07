<template>
  <div>
    
    <v-snackbar v-model="snackbar" top :timeout="2000" color="orange">
      <span class="subtitle">{{ snackbarMsg }}</span>
      <v-btn icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <nav>
      <v-app-bar app flat class="pa-4">
         <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mb-4"></v-app-bar-nav-icon>
        <v-toolbar-title class="grey--text mb-4">Worklify</v-toolbar-title>
        <v-spacer></v-spacer>

 

        <v-spacer></v-spacer>
       
        <v-menu offset-y open-on-hover color="primary">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" depressed class="mb-3">
              <v-avatar size="30">
                <v-icon>mdi-account-circle</v-icon>
              </v-avatar>
              <span>Hi AKshat</span>
              <v-icon dark>keyboard_arrow_down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item depressed @click="signout">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer  v-model="drawer" app color="#27408B" dark expand-on-hover>

        <v-list>

          <v-list-item-group v-model="item" color="orange">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
              exact
              class="color"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon" style="font-size:20px"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>
    
  </div>
</template>

<script>
import axios from "axios";


export default {
  props: ["routeItems"],
  components: {

  },

  data() {
    return {
    
      drawer: false,
      companyName : "",
      dialogEnquiry: false,
  
      item: 0,
      items: this.routeItems,
      componentActiveData: {},
      badgeLen: 0,
      dropItems: [
        { text: "BOK", value: "bookingId" },
        { text: "QUO", value: "quotationId" },
        { text: "INQ", value: "enquiryId" }
      ],
      selectedId: "bookingId",
      enteredId: "",
      enquiry: {},
      quotation: {},
      booking: {},
      showEnquiry: false,
      showQuotation: false,
      showBooking: false,
      snackbar: false,
      snackbarMsg: ""
    };
  },
  async created() {
    console.log(this.$router.currentRoute.path);
    console.log(this.routeItems)
   
  },
  methods: {
    
    async signout() {
      await axios.post(
        "http://localhost:5000/auth/logout",
        { emailAddress: this.myGlobalVar.getItem('loginData').emailAddress },
        {
          headers: {
            authorization: this.myGlobalVar.getItem('loginData').token
          }
        }
      );
      this.myGlobalVar.removeItem("loginData");
      this.myGlobalVar.removeItem("plan");
  
      this.$router.replace("/");
    },
    
}
};
</script>

<style  scoped>
div {
  font-size: 15px;
}
</style>