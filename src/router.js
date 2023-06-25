import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage.vue";
import LoginPage from "./views/LoginPage.vue";
import CartPage from "./views/CartPage.vue";
import ItemDetailContainer from "./views/ItemDetailContainer.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/cart", component: CartPage, name: "cart" },
  { path: "/detail/:id", component: ItemDetailContainer, name: "detail" },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
