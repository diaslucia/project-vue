<template>
  <div class="buttonContainer_counter">
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
      if (this.quantity > 1) {
        this.$emit("sub-product");
      }
    },
  },
};
</script>

<style scoped>
.buttonContainer_counter {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 120px;
}

.button {
  border: none;
  background-color: #572e4f;
  color: white;
  border-radius: 30px;
  padding: 7px 15px;
  cursor: pointer;
  margin: 0 10px;
}

.text {
  font-size: 16px;
  color: #171717;
}
</style>
