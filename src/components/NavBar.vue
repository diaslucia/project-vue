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
            <span>0</span>
          </div></router-link
        >
      </li>
      <!--  <li  class="link">
        <router-link :to="{ name: 'detail', params: { id: 1 } }"
          >Detalle</router-link
        >
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav {
  background-color: white;
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
