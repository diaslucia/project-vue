<template>
  <nav class="nav">
    <ul class="list">
      <li class="link"><router-link to="/">Home</router-link></li>
      <li class="link">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li class="link">
        <router-link :to="{ name: 'cart' }"
          >Cart
          <div class="number">
            <span>{{ this.cartStore.cartTotal() }}</span>
          </div></router-link
        >
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
  background-color: lightcoral;
  width: 100%;
  margin-bottom: 30px;
}
.list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  list-style: none;
}

.link {
  display: flex;
  gap: 10px;
  font-size: 18px;
  cursor: pointer;
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
