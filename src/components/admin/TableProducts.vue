<template>
  <div class="container">
    <table>
      <tbody>
        <tr v-for="(product, i) in products" :key="i">
          <td class="td">
            <img :src="product.image" :alt="product.name" class="image" />
          </td>
          <td>{{ product.name | capitalize }}</td>
          <td>U$S {{ product.price }}</td>
          <td class="td">
            <button class="button button_edit" @click="editProduct(product.id)">
              Editar
            </button>
          </td>
          <td class="td">
            <button class="button" @click="deleteProduct(product.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const url = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "TableProducts",
  data: () => ({
    products: [],
  }),
  filters: {
    capitalize(string) {
      return string.replace(/\b\w/g, (first) => first.toUpperCase());
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.products = await (await fetch(`${url}/products`)).json();
      } catch (err) {
        this.fetchError = "Error de conexión.";
        console.log(err);
      }
    },
    deleteProduct(id) {
      fetch(`${url}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          this.products = this.products.filter((prod) => prod.id != id);
        });
    },
    editProduct(id) {
      this.$router.push({ path: "/edit-product", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
}

table {
  padding: 20px;
  vertical-align: middle;
  border: 2px solid #572e4f;
  border-radius: 10px;
  width: 800px;
  margin: 0 auto;
  color: #171717;
  font-size: 16px;
}

td {
  width: 20%;
  text-align: start;
  border: none;
}

.td {
  text-align: center;
}

.row {
  border: none;
}

.image {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.button {
  cursor: pointer;
  background-color: rgb(185, 0, 0);
  border: 0;
  width: 80px;
  border-radius: 4px;
  color: white;
  padding: 5px 0;
}

.button_edit {
  background-color: rgb(234, 234, 24);
  color: #171717;
}
</style>
