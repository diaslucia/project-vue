<template>
  <div class="container">
    <div class="innerContainer">
      <div
        v-for="(order, i) in this.userStore.user.order"
        :key="i"
        class="firstTable"
      >
        <div class="textContainer">
          <p class="orderNumber">Order {{ i + 1 }}</p>
          <p class="timestamp">
            {{ order.timestamp }}
          </p>
        </div>
        <div class="line"></div>

        <table v-for="(product, i) in order.products" :key="i">
          <tr class="card">
            <td class="center_td">
              <img :src="product.image" :alt="product.name" class="img" />
            </td>
            <td class="title bigger_space">{{ product.name }}</td>
            <td class="text center_td">US$ {{ product.price }}</td>
            <td class="text">quantity: {{ product.quantity }}</td>
            <td class="text">subtotal: US${{ product.subtotal }}</td>
          </tr>
        </table>

        <div class="totalContainer">
          <p class="total">Total: US$ {{ order.total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from "@/store/userStore";

export default {
  name: "MyOrdersPage",
  data: () => ({
    userStore,
  }),
  methods: {
    getOrder(product) {
      console.log(product);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 60px);
  width: 100%;
}

.innerContainer {
  padding: 60px 0;
}

.firstTable {
  margin: 50px 0;
}

.orderNumber {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #572e4f;
}

td {
  width: 16%;
  text-align: start;
  border: none;
}
.center_td {
  text-align: center !important;
}

.bigger_space {
  width: 25%;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #572e4f;
  margin: 10px 0;
}
.card {
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
.title {
  color: #171717;
  font-size: 16px;
  font-weight: bold;
}
.text {
  color: #171717;
  font-size: 14px;
}

.textContainer {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
}

.timestamp {
  font-size: 12px;
  color: #171717;
}

.totalContainer {
  background-color: #572e4f;
  padding: 10px 0;
  width: 100%;
  border-radius: 15px;
  margin-top: 15px;
}

.total {
  color: white;
  font-size: 16px;
  text-align: end;
  margin-right: 30px;
}
</style>
