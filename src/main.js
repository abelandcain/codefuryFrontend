import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { CometChat } from "@cometchat-pro/chat";
import {COMETCHAT_CONSTANTS} from './CONSTS';

Vue.config.productionTip = false

var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(COMETCHAT_CONSTANTS.REGION).build();

CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(()=>{
console.log("cometChat initialised")

})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
