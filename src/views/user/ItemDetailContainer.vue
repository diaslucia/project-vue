<template>
  <div class="container">
    <SpinnerSpin v-if="spinner" />
    <ItemDetail v-else :product="product" />
  </div>
</template>

<script>
import ItemDetail from "../../components/user/ItemDetail.vue";
import SpinnerSpin from "@/components/SpinnerSpin.vue";
const apiProductos = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "ItemDetailContainer",
  components: {
    ItemDetail,
    SpinnerSpin,
  },
  data: () => ({
    product: {},
    fetchError: "",
    spinner: true,
  }),
  created() {
    this.fetchDetail(apiProductos);
  },
  methods: {
    async fetchDetail(url) {
      try {
        this.product = await (
          await fetch(`${url}/products/${this.$route.params.id}`)
        ).json();
        this.spinner = false;
      } catch (err) {
        this.fetchError = "Error de conexión.";
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
