import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/app.scss"
import { firebase } from '@firebase/app'
import '@firebase/auth'

import clickOutside from "./other/click-ouside"
import './other/service-worker'

import VueParticlesBg from 'particles-bg-vue';

import firebaseConfig from './config';

Vue.directive("click-outside", clickOutside);
Vue.use(VueParticlesBg);



firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
