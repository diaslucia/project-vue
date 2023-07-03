<template>
  <div class="container">
    <SpinnerSpin v-if="spinner" />
    <div v-else>
      <div v-if="fetchError === 'Error'">
        <p class="errorMessage">Sorry! There are no products at the moment</p>
      </div>
      <div class="innerContainer" v-else>
        <ItemCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/user/ItemCard.vue";
import SpinnerSpin from "@/components/SpinnerSpin.vue";
import { fetchHelper } from "@/services/fetchHelper.js";
const url = process.env.VUE_APP_MOCKAPI_URL;
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    ItemCard,
    SpinnerSpin,
  },
  data: () => ({
    products: [],
    fetchError: "",
    spinner: true,
  }),
  created() {
    this.fetchData();
    this.redirectUser();
  },
  computed: {
    ...mapGetters("user", ["isAdmin"]),
  },
  methods: {
    async fetchData() {
      try {
        this.products = await fetchHelper.get(`${url}/products`);
        this.spinner = false;
      } catch (err) {
        this.fetchError = "Error";
        console.log(err);
      }
    },
    redirectUser() {
      if (this.isAdmin) {
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

.errorMessage {
  color: #572e4f;
  font-size: 18px;
  align-self: center;
}
</style>
