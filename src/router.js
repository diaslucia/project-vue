import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/user/HomePage.vue";
import LoginPage from "./views/user/LoginPage.vue";
import CartPage from "./views/user/CartPage.vue";
import AdminPage from "./views/admin/AdminPage.vue";
import OrdersPage from "./views/admin/OrdersPage.vue";
import ItemDetailContainer from "./views/user/ItemDetailContainer.vue";
import SignUpPage from "./views/user/SignUpPage.vue";
import MyOrdersPage from "./views/user/MyOrdersPage.vue";
import ErrorPage from "./views/ErrorPage.vue";
import AddOrUpdateProduct from "./views/admin/AddOrUpdateProduct.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/signup", component: SignUpPage, name: "signup" },
  { path: "/cart", component: CartPage, name: "cart" },
  { path: "/admin", component: AdminPage, name: "admin" },
  { path: "/my-orders", component: MyOrdersPage, name: "my-orders" },
  { path: "/orders", component: OrdersPage, name: "orders" },
  {
    path: "/admin/product/:id",
    component: AddOrUpdateProduct,
    name: "add-update-product",
  },
  { path: "/detail/:id", component: ItemDetailContainer, name: "detail" },
  { path: "*", component: ErrorPage },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
