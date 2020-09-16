import Vue from 'vue'
import App from './App.vue'
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.config.productionTip = false
const opts = {};

const vuetify = new Vuetify(opts);

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
