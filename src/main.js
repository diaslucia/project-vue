import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueForm from "vue-form";

Vue.config.productionTip = false;
Vue.use(VueForm);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
