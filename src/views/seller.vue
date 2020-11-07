<template>
  <v-app>
    <nav-bar :routeItems="navBarItems"></nav-bar>
    <v-content class="ma-4">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
  data: () => ({
    navBarItems: [
      { icon: "dashboard", text: "Dashboard", route: "/seller/" },
      { icon: "euro_symbol", text: "Rates", route: "/admin/rates" },
      { icon: "search", text: "Enquiry", route: "/admin/enquiry" },
      { icon: "web", text: "Quotes", route: "/admin/quotes" },
      {
        icon: "airplanemode_active",
        text: "Shipments",
        route: "/admin/shipments"
      },
      {
        icon: "add_circle",
        text: "Create-Quotation",
        route: "/admin/createQuotation"
      },

      { icon: "contacts", text: "Shipper", route: "/admin/shipper" },

      {
        icon: "perm_identity",
        text: "Profile Config",
        route: "/seller/profileConfig"
      },
      {
        icon: "credit_card",
        text: "Payment Manage",
        route: "/admin/payment"
      }
    ]
  })
};
</script>

<style scoped>
.dropbox {
  max-width: 10rem;
  max-height: 2rem;
}

.searchResult {
  margin: 100px auto 0px auto;
}
</style>
