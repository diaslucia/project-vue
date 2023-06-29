<template>
  <nav class="nav">
    <ul class="list">
      <li class="link"><router-link to="/">Home</router-link></li>
      <li class="link">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li class="link">
        <router-link :to="{ name: 'cart' }">Cart </router-link>
        <div class="number">
          <span>{{ this.cartStore.cartTotal() }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { cartStore } from "@/store/cartStore";

export default {
  name: "NavBar",
  data: () => ({
    cartStore,
    total: 0,
  }),
};
</script>

<style scoped>
.nav {
  background-color: #bf1e62;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
}
.list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}

.link,
.link a {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
.number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(71, 54, 86);
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
.number span {
  color: white;
  font-size: 12px;
}
</style>
