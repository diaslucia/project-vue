<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" class="img" />
    <div class="innerContainer">
      <h3 class="title">{{ product.name }}</h3>
      <p class="text">{{ product.description }}</p>
      <p class="price">${{ product.price }} ud.</p>
      <ItemCount
        :quantity="quantity"
        @sub-product="substractProduct"
        @sum-product="sumProduct"
      />
      <button @click="addCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import ItemCount from "./ItemCount.vue";
import { cartStore } from "@/store/cartStore";

export default {
  name: "ItemDetail",
  components: {
    ItemCount,
  },
  props: {
    product: {
      id: Number,
      name: String,
      price: Number,
      description: String,
      image: String,
    },
  },
  data: () => ({
    cartStore,
    quantity: 1,
  }),
  methods: {
    addCart() {
      this.cartStore.addToCart(this.product, this.quantity);
    },
    substractProduct() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    sumProduct() {
      this.quantity++;
    },
  },
};
</script>

<style scoped>
.card {
  height: 230px;
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}
.innerContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 17px;
}
.price {
  font-size: 14px;
}

.text {
  font-size: 14px;
  color: #2e354f;
}
</style>
