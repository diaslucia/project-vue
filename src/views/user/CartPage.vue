<template>
  <div class="container">
    <p v-if="this.cartStore.cart.length === 0" class="text">
      Your cart is empty!
    </p>

    <table v-else class="table">
      <tbody>
        <ItemCart
          v-for="product in this.cartStore.cart"
          :key="product.id"
          :product="product"
        />
      </tbody>
    </table>

    <p class="total" v-if="this.cartStore.cart.length != 0">
      Total:
      <span class="total_span"> US${{ this.cartStore.cartTotalPrice() }}</span>
    </p>
    <button
      class="button"
      v-if="this.cartStore.cart.length != 0"
      @click="buyCart"
    >
      Buy
    </button>
  </div>
</template>

<script>
import ItemCart from "@/components/cart/ItemCart.vue";
import { cartStore } from "@/store/cartStore";
import { userStore } from "@/store/userStore";
import { getTimeStamp } from "@/utils/helper.js";
import { fetchHelper } from "@/services/fetchHelper.js";
const url = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "CartPage",
  components: {
    ItemCart,
  },
  data: () => ({
    cartStore,
    userStore,
  }),
  methods: {
    async buyCart() {
      if (this.userStore.loggedIn()) {
        const timestamp = getTimeStamp();
        const total = this.cartStore.cartTotalPrice();

        const newOrder = {
          timestamp: timestamp,
          total: total,
          products: [...this.cartStore.cart],
        };

        this.userStore.user.order.push(newOrder);

        try {
          await fetchHelper.put(
            `${url}/users/${this.userStore.user.id}`,
            this.userStore.user
          );
          this.cartStore.emptyCart();
        } catch (err) {
          console.log(err);
        } finally {
          this.$router.push("/");
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  width: 100%;
}
.table {
  margin: 100px 0;
}

.text {
  color: #572e4f;
  font-size: 18px;
  align-self: center;
}

.total {
  color: #572e4f;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-weight: bold;
  align-self: flex-end;
  width: 100%;
  margin-right: 30px;
}

.total_span {
  color: #572e4f;
  font-size: 18px;
  font-weight: normal;
  margin-left: 10px;
}

.button {
  align-self: flex-end;
  background-color: #027b7f;
  color: white;
  border-radius: 30px;
  padding: 7px 15px;
  cursor: pointer;
  border: none;
  font-size: 18px;
  margin-right: 30px;
}
</style>
