import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDiBknWvTY5uZTItYwtkCLMGC4g4SDtZIE",
  authDomain: "uk-perspektiva-komfort.firebaseapp.com",
  projectId: "uk-perspektiva-komfort",
  storageBucket: "uk-perspektiva-komfort.appspot.com",
  messagingSenderId: "520572385326",
  appId: "1:520572385326:web:69382d8f3a0ca91eaf47bf"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
