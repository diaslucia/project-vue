<template>
  <router-link :to="{ name: 'detail', params: { id: product.id } }">
    <div class="card">
      <img :src="product.image" :alt="product.name" class="img" />

      <h3 class="title">{{ product.name }}</h3>
      <p class="price">US$ {{ product.price }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    product: {
      id: Number,
      name: String,
      price: Number,
      image: String,
    },
  },
  methods: {
    addCart() {
      console.log("agregado");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #171717;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
.title {
  font-size: 17px;
  margin-bottom: 5px;
}
.price {
  font-size: 13px;
}
</style>
