<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" class="img" />
    <div class="innerContainer">
      <div class="textContainer">
        <h3 class="title">{{ product.name }}</h3>
        <p class="price">US${{ product.price }} ud.</p>
      </div>
      <p class="text">{{ product.description }}</p>
      <div class="buttonContainer" v-if="added">
        <p class="added">Product added!</p>
        <button @click="goCart" class="button">Go to cart</button>
      </div>
      <div class="buttonContainer" v-else>
        <ItemCount
          :quantity="quantity"
          @sub-product="substractProduct"
          @sum-product="sumProduct"
        />
        <button @click="addCart" class="button">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCount from "./ItemCount.vue";

export default {
  name: "ItemDetail",
  components: {
    ItemCount,
  },
  props: {
    product: {
      id: String,
      name: String,
      price: Number,
      description: String,
      image: String,
    },
  },
  data: () => ({
    quantity: 1,
    added: false,
  }),
  methods: {
    addCart() {
      this.$store.dispatch("cart/addToCartAction", {
        product: this.product,
        quantitySelected: this.quantity,
      });
      this.added = true;
    },
    substractProduct() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    sumProduct() {
      this.quantity++;
    },
    goCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.card {
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
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 250px;
}

.textContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}

.buttonContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
.title {
  font-size: 25px;
  font-weight: bold;
  color: #572e4f;
}
.price {
  font-size: 16px;
  color: #572e4f;
}

.text {
  font-size: 16px;
  color: #171717;
}

.added {
  font-size: 16px;
  color: #027b7f;
}

.button {
  border: none;
  background-color: #027b7f;
  color: white;
  border-radius: 30px;
  padding: 7px 15px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
}
</style>
