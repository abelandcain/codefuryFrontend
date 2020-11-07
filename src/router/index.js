import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import sellerProfile from "../views/seller/profile"
import seller from "../views/seller.vue"
import customerProfile from "../views/customer/profile"
import customer from "../views/customer.vue"
import sellerProfileconfig from "../views/seller/profileConfig"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: "/seller/",
    name: "seller",
    component: seller,
    meta: {
      requiresAuth: true,
      is_seller: true
    },
    children: [
      { path: "", component: sellerProfile },
      { path: "profileConfig", component: sellerProfileconfig }
    ]
   },
  {
    path: "/customer/",
    component: customer,
    meta: {
      requiresAuth: true,
      is_user: true
    },
    children: [
      { path: "", component: customerProfile },
  
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('loginData') == null) {
      next({ path: "/" });
    } else {
      const role = JSON.parse(sessionStorage.getItem('loginData')).role;
      console.log(sessionStorage.getItem('loginData'),role)
      if (to.matched.some(record => record.meta.is_seller)) {
        if (role == "seller") {
          next();
        } else {
          next({ path: "/" });
        }
      } else if (to.matched.some(record => record.meta.is_user)) {
        if (role == "buyer") {
          next();
        } else {
          next({ path: "/" });
        }
      } else if (to.matched.some(record => record.meta.is_superUser)) {
        if (role == "superUser") {
          next();
        } else {
          next({ path: "/" });
        }
      } else {
        next();
      }
    }
  } else {
    next();
  }
});
export default router;

