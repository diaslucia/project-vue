<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" class="img" />
    <div class="innerContainer">
      <h3 class="title">{{ product.name }}</h3>
      <p class="price">{{ product.quantity }}</p>
      <p class="price">subtotal: ${{ product.subtotal }}</p>
    </div>
    <ItemCount
      :quantity="product.quantity"
      @sub-product="subProduct"
      @sum-product="sumProduct"
    />
    <button @click="deleteProduct">Delete</button>
  </div>
</template>

<script>
import ItemCount from "@/components/user/ItemCount.vue";
import { cartStore } from "@/store/cartStore";

export default {
  name: "ItemCart",
  components: {
    ItemCount,
  },
  data: () => ({
    cartStore,
  }),
  props: {
    product: {
      id: Number,
      name: String,
      quantity: Number,
      subtotal: Number,
      image: String,
    },
  },
  methods: {
    subProduct() {
      this.cartStore.substractProduct(this.product);
    },
    sumProduct() {
      this.cartStore.sumProduct(this.product);
    },
    deleteProduct() {
      this.cartStore.deleteProduct(this.product);
    },
  },
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 230px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.img {
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.innerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.title {
  font-size: 17px;
  padding: 0 10px;
}
.price {
  font-size: 14px;
  padding: 0 10px;
}
</style>
