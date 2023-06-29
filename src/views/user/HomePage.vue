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
import ItemCard from "@/components/user/ItemCard.vue";
import { userStore } from "@/store/userStore";
const apiProductos = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "HomePage",
  components: {
    ItemCard,
  },
  data: () => ({
    products: [],
    fetchError: "",
    userStore,
  }),
  created() {
    this.fetchData(apiProductos);
    this.getUser();
  },
  methods: {
    async fetchData(url) {
      try {
        this.products = await (await fetch(`${url}/products`)).json();
      } catch (err) {
        this.fetchError = "Error de conexión.";
        console.log(err);
      }
    },
    getUser() {
      if (this.userStore.user.admin) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>
