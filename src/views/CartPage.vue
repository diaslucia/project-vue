<template>
  <div>
    <div v-if="this.cartStore.cart.length === 0">
      <p>No hay productos en tu carrito</p>
    </div>
    <div v-else>
      <ItemCart
        v-for="product in this.cartStore.cart"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ItemCart from "@/components/cart/ItemCart.vue";
import { cartStore } from "@/store/cartStore";

export default {
  name: "CartPage",
  components: {
    ItemCart,
  },
  data: () => ({
    cartStore,
  }),
};
</script>
