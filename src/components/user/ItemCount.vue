<template>
  <div class="buttonContainer">
    <button class="button" @click="substractProduct">-</button>
    <p class="text">{{ quantity }}</p>
    <button class="button" @click="addProduct">+</button>
  </div>
</template>

<script>
export default {
  name: "ItemCount",
  props: {
    quantity: Number,
  },
  methods: {
    addProduct() {
      this.$emit("sum-product");
    },
    substractProduct() {
      this.$emit("sub-product");
    },
  },
};
</script>

<style scoped>
.buttonContainer {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
}

.button {
  border: none;
  background-color: rgb(115, 90, 138);
  color: white;
  border-radius: 30px;
  padding: 7px 15px;
  margin-bottom: 10px;
  cursor: pointer;
}

.btnDelete,
.button {
  border: none;
  background-color: rgb(115, 90, 138);
  color: white;
  border-radius: 30px;
  padding: 7px 15px;
  cursor: pointer;
  margin: 0 10px;
}

.btnDelete {
  background-color: rgb(71, 54, 86);
}
</style>
