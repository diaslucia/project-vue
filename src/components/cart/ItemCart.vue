<template>
  <tr class="card">
    <td class="center_td">
      <img :src="product.image" :alt="product.name" class="img" />
    </td>
    <td class="title bigger_space">{{ product.name }}</td>
    <td class="text center_td">US$ {{ product.price }}</td>
    <td class="text">quantity: {{ product.quantity }}</td>
    <td class="text">subtotal: US${{ product.subtotal }}</td>

    <td class="center_td">
      <ItemCount
        :quantity="product.quantity"
        @sub-product="subProduct"
        @sum-product="sumProduct"
      />
    </td>
    <td class="center_td">
      <button @click="deleteProduct" class="delete">Delete</button>
    </td>
  </tr>
</template>

<script>
import ItemCount from "@/components/user/ItemCount.vue";
import { mapActions } from "vuex";

export default {
  name: "ItemCart",
  components: {
    ItemCount,
  },
  props: {
    product: {
      id: String,
      name: String,
      quantity: Number,
      subtotal: Number,
      image: String,
    },
  },
  methods: {
    ...mapActions("cart", [
      "deleteProductAction",
      "sumProductAction",
      "substractProductAction",
    ]),
    subProduct() {
      this.substractProduct(this.product);
    },
    sumProduct() {
      this.sumProductAction(this.product);
    },
    deleteProduct() {
      this.deleteProductAction(this.product);
    },
  },
};
</script>

<style scoped>
td {
  width: 16%;
  text-align: start;
  border: none;
}
.center_td {
  text-align: center !important;
}

.bigger_space {
  width: 25%;
}
.card {
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
.title {
  color: #171717;
  font-size: 16px;
  font-weight: bold;
}
.text {
  color: #171717;
  font-size: 14px;
}
.delete {
  cursor: pointer;
  background-color: rgb(185, 0, 0);
  border: 0;
  width: 80px;
  border-radius: 4px;
  color: white;
  padding: 5px 0;
}

.buttonContainer {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
}
</style>
