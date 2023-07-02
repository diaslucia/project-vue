import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { userModule } from "./modules/userStore";
import { cartModule } from "./modules/cartModule";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    cart: cartModule,
  },
});
