<template>
  <router-link :to="{ name: 'detail', params: { id: product.id } }">
    <div class="card">
      <img :src="product.image" :alt="product.name" class="img" />
      <div class="innerContainer">
        <h3 class="title">{{ product.name }}</h3>
        <p class="text">{{ product.description }}</p>
        <p class="price">${{ product.price }} ud.</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemDetail",
  props: {
    product: {
      id: Number,
      name: String,
      price: Number,
      description: String,
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

.text {
  font-size: 14px;
  color: #2e354f;
}
</style>
