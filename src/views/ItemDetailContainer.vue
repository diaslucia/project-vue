<template>
  <div>
    <h1>ItemDetailContainer</h1>
    <p>{{ getId }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemDetailContainer",
  computed: {
    getId() {
      return this.$route.params.id;
    },
  },
};
</script>
