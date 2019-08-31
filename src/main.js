/* eslint-disable linebreak-style */
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/prefer-default-export
export const bus = new Vue();
Vue.use(VueMaterial);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
