<template>
  <div class="container">
    <ItemDetail :product="product" />
  </div>
</template>

<script>
import ItemDetail from "../../components/user/ItemDetail.vue";
const apiProductos = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "ItemDetailContainer",
  components: {
    ItemDetail,
  },
  data: () => ({
    product: {},
    fetchError: "",
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
