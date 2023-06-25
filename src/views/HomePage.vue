<template>
  <div>
    <h1>home</h1>
  </div>
</template>

<script>
export const apiProductos = process.env.VUE_APP_MOCKAPI_UR;

export default {
  name: "HomePage",
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
