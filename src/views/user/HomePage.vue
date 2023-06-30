<template>
  <div class="container">
    <SpinnerSpin v-if="spinner" />
    <div v-else class="innerContainer">
      <ItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/user/ItemCard.vue";
import SpinnerSpin from "@/components/SpinnerSpin.vue";
import { userStore } from "@/store/userStore";
const apiProductos = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "HomePage",
  components: {
    ItemCard,
    SpinnerSpin,
  },
  data: () => ({
    products: [],
    fetchError: "",
    userStore,
    spinner: true,
  }),
  created() {
    this.fetchData(apiProductos);
    this.getUser();
  },
  methods: {
    async fetchData(url) {
      try {
        this.products = await (await fetch(`${url}/products`)).json();
        this.spinner = false;
      } catch (err) {
        this.fetchError = "Error de conexión.";
        console.log(err);
      }
    },
    getUser() {
      if (
        Object.keys(this.userStore.user).length != 0 &&
        this.userStore.user.admin
      ) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  width: 100%;
}
.innerContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  margin: 100px 0;
}
</style>
