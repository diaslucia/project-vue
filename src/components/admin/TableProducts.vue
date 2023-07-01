<template>
  <div>
    <SpinnerSpin v-if="spinner" />

    <div class="container" v-else>
      <table>
        <tbody>
          <tr v-for="(product, i) in products" :key="i">
            <td class="image_td">
              <img :src="product.image" :alt="product.name" class="image" />
            </td>
            <td>{{ product.name | capitalize }}</td>
            <td>US$ {{ product.price }}</td>
            <td class="td">
              <button
                class="button button_edit"
                @click="editProduct(product.id)"
              >
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
  </div>
</template>

<script>
import { fetchHelper } from "@/services/fetchHelper.js";
const url = process.env.VUE_APP_MOCKAPI_URL;
import SpinnerSpin from "@/components/SpinnerSpin.vue";

export default {
  name: "TableProducts",
  data: () => ({
    products: [],
    spinner: true,
  }),
  components: {
    SpinnerSpin,
  },
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
        this.products = await fetchHelper.get(`${url}/products`);
        this.spinner = false;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteProduct(id) {
      this.spinner = true;

      try {
        await fetchHelper.delete(`${url}/products/${id}`);
        this.products = this.products.filter((prod) => prod.id != id);
      } catch (err) {
        console.log(err);
      } finally {
        this.spinner = false;
      }
    },
    editProduct(id) {
      this.$router.push(`/admin/product/${id}`);
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
  min-height: calc(100vh - 60px);
  height: 100%;
  padding: 100px 0;
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

.image_td {
  width: 10%;
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
