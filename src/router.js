import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/user/HomePage.vue";
import LoginPage from "./views/user/LoginPage.vue";
import CartPage from "./views/user/CartPage.vue";
import AdminPage from "./views/admin/AdminPage.vue";
import NewProductPage from "./views/admin/NewProductPage.vue";
import EditProductPage from "./views/admin/EditProductPage.vue";
import ItemDetailContainer from "./views/user/ItemDetailContainer.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/cart", component: CartPage, name: "cart" },
  { path: "/admin", component: AdminPage, name: "admin" },
  { path: "/new-product", component: NewProductPage, name: "new-product" },
  { path: "/edit-product", component: EditProductPage, name: "edit-product" },
  { path: "/detail/:id", component: ItemDetailContainer, name: "detail" },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
