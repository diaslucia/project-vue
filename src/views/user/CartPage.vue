<template>
  <div class="container">
    <table v-if="this.getCartLength" class="table">
      <tbody>
        <ItemCart
          v-for="product in this.getCart"
          :key="product.id"
          :product="product"
        />
      </tbody>
    </table>

    <p v-else class="text">Your cart is empty!</p>

    <p class="total" v-if="this.getCartLength">
      Total:
      <span class="total_span"> US${{ getTotalPrice }}</span>
    </p>
    <button class="button" v-if="this.getCartLength" @click="buyCart">
      Buy
    </button>
  </div>
</template>

<script>
import ItemCart from "@/components/cart/ItemCart.vue";
import { getTimeStamp } from "@/utils/helper.js";
import { fetchHelper } from "@/services/fetchHelper.js";
const url = process.env.VUE_APP_MOCKAPI_URL;
import { mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
    ItemCart,
  },
  computed: {
    ...mapGetters("user", ["loggedIn", "getUser"]),
    ...mapGetters("cart", [
      "getCart",
      "getTotalPrice",
      "getCartLength",
      "setEmptyCartAction",
    ]),
  },
  methods: {
    async buyCart() {
      if (this.loggedIn) {
        const timestamp = getTimeStamp();

        const newOrder = {
          timestamp: timestamp,
          total: this.getTotalPrice,
          products: [...this.getCart],
        };
        this.$store.dispatch("user/pushOrderAction", newOrder);

        try {
          await fetchHelper.put(
            `${url}/users/${this.getUser.id}`,
            this.getUser
          );
          this.$store.dispatch("cart/setEmptyCartAction");
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
  z-index: 9;
}

.total_span {
  color: #572e4f;
  font-size: 18px;
  font-weight: normal;
  margin-left: 10px;
  z-index: 9;
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
  z-index: 9;
}
</style>
