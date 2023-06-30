import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueForm from "vue-form";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCartShopping);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueForm);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
