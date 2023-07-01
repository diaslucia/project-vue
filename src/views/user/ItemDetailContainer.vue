<template>
  <div class="container">
    <SpinnerSpin v-if="spinner" />
    <ItemDetail v-else :product="product" />
  </div>
</template>

<script>
import ItemDetail from "../../components/user/ItemDetail.vue";
import SpinnerSpin from "@/components/SpinnerSpin.vue";
import { fetchHelper } from "@/services/fetchHelper.js";
const url = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "ItemDetailContainer",
  components: {
    ItemDetail,
    SpinnerSpin,
  },
  data: () => ({
    product: {},
    spinner: true,
  }),
  created() {
    this.fetchDetail();
  },
  methods: {
    async fetchDetail() {
      try {
        this.product = await fetchHelper.get(
          `${url}/products/${this.$route.params.id}`
        );
        this.spinner = false;
      } catch (err) {
        console.log(err);
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
</style>
