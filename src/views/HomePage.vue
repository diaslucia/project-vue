<template>
  <div>
    <h1>home</h1>
    <ItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ItemCard from "../components/user/ItemCard.vue";
export const apiProductos = process.env.VUE_APP_MOCKAPI_UR;

export default {
  name: "HomePage",
  componentes: {
    ItemCard,
  },
  data: () => ({
    products: [],
    fetchError: "",
  }),
  created() {
    this.fetchData(apiProductos);
  },
  methods: {
    async fetchData(url) {
      try {
        this.products = await (await fetch(url)).json();
        console.log(this.products);
      } catch (err) {
        this.fetchError = "Error de conexión.";
        console.log(err);
      }
    },
  },
};
</script>
