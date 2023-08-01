<template>
  <div>
    <NavBar />
    <img
      src="@/assets/sprinkles.png"
      alt="sprinkles"
      class="sprinkles sprinklesTop"
    />
    <img
      src="@/assets/sprinkles.png"
      alt="sprinkles"
      class="sprinkles sprinklesBottom"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
html,
body {
  margin: 0;
  padding: 0;
}

.sprinkles {
  position: fixed;
  transform: rotate(90deg);
  height: 150px;
  width: auto;
  object-fit: contain;
  z-index: 0;
  overflow: hidden;
}

.sprinklesTop {
  top: 0px;
  left: -100px;
}

.sprinklesBottom {
  right: -100px;
  bottom: -10px;
}
</style>
