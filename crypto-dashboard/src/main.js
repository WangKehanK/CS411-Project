import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/app.scss"
import { firebase } from '@firebase/app'
import '@firebase/auth'
import clickOutside from "./directives/click-ouside"
import VueParticlesBg from "particles-bg-vue";
import VueSimpleAlert from 'vue-simple-alert'

import firebaseConfig from './config';

Vue.directive("click-outside", clickOutside);
Vue.use(VueParticlesBg, VueSimpleAlert);



firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
