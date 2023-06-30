<template>
  <nav class="nav">
    <ul class="list">
      <li class="link">
        <router-link to="/"
          ><img src="@/assets/logo.png" class="logo"
        /></router-link>
      </li>
      <li class="link" v-if="Object.keys(this.userStore.user).length === 0">
        <router-link :to="{ name: 'login' }">
          <font-awesome-icon icon="fa-solid fa-user" class="icon"
        /></router-link>
      </li>
      <li class="link" v-else>
        <font-awesome-icon
          icon="fa-solid fa-user"
          class="icon"
          @click="handleDropdown"
        />
        <div class="dropdown" v-if="dropdown">
          <p
            @click="goTo('/orders')"
            v-if="this.userStore.user.admin"
            class="dropdown_text"
          >
            Orders
          </p>

          <p class="dropdown_text" @click="goTo('/my-orders')" v-else>
            My orders
          </p>
          <div class="line"></div>
          <p class="dropdown_text" @click="logOut">Log out</p>
        </div>
      </li>
      <li
        class="link"
        :style="
          Object.keys(this.userStore.user).length != 0 &&
          this.userStore.user.admin
            ? { visibility: 'hidden' }
            : { visibility: 'visible' }
        "
      >
        <router-link :to="{ name: 'cart' }"
          ><font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon" />
        </router-link>
        <div class="number">
          <span>{{ this.cartStore.cartTotal() }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { cartStore } from "@/store/cartStore";
import { userStore } from "@/store/userStore";

export default {
  name: "NavBar",
  data: () => ({
    cartStore,
    userStore,
    total: 0,
    dropdown: false,
  }),
  methods: {
    handleDropdown() {
      this.dropdown = !this.dropdown;
    },
    logOut() {
      this.dropdown = !this.dropdown;
      this.userStore.user = {};
      this.$router.push("/login");
    },
    goTo(link) {
      this.dropdown = !this.dropdown;
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #bf1e62;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: relative;
}
.list {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin-right: 30px;
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

.icon {
  font-size: 20px;
}
.number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(71, 54, 86);
  width: 15px;
  height: 15px;
  border-radius: 100%;
  position: absolute;
  top: 15px;
  right: 20px;
}
.number span {
  color: white;
  font-size: 12px;
}

.logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
}

.dropdown {
  position: absolute;
  background-color: rgb(71, 54, 86);
  padding: 10px;
  border-radius: 10px;
  top: 65px;
  right: 35px;
}

.dropdown_text {
  font-size: 14px;
  text-align: center;
  color: white;
  width: 100%;
}

.line {
  height: 1px;
  width: 80%;
  background-color: white;
  margin: 5px auto;
}
</style>
