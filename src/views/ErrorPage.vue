<template>
  <div class="container">
    <div class="textContainer">
      <p class="title">Oops!</p>
      <p class="text">Page not found</p>
      <button @click="goBack" class="button">Go back</button>
    </div>

    <img alt="donut" src="@/assets/spinner.png" class="image" />
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #bf1e62;
}

.textContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.title {
  color: white;
  font-size: 50px;
}

.text {
  color: white;
  font-size: 16px;
}
.image {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.button {
  border: none;
  background-color: #572e4f;
  color: white;
  border-radius: 30px;
  padding: 7px 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>
