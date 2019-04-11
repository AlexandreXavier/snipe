import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import * as firebase from "firebase";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import DateFilter from "./filters/date";
import AlertCmp from "./components/Shared/Alert.vue";

import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", AlertCmp);
Vue.component("portocaro-footer", Footer);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCuI6XW_LJj3rzzo4PSjOJml3O3kxun6no",
      authDomain: "evento-7dc1a.firebaseapp.com",
      databaseURL: "https://evento-7dc1a.firebaseio.com",
      projectId: "evento-7dc1a",
      storageBucket: "evento-7dc1a.appspot.com",
      messagingSenderId: "591354419764"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // alert("Utilizador " + user.id);
        this.$store.dispatch("autoSignIn", user);
      }
    });
    //carregar os eventos gravados na db do firebase
    this.$store.dispatch("loadMeetups");
  }
}).$mount("#app");
