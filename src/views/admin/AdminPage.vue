<template>
  <div>
    <TableProducts />
    <router-link :to="{ name: 'new-product' }">
      <button class="button">+</button>
    </router-link>
  </div>
</template>

<script>
import { userStore } from "@/store/userStore";
import TableProducts from "@/components/admin/TableProducts.vue";

export default {
  name: "AdminPage",
  components: {
    TableProducts,
  },
  data: () => ({
    userStore,
  }),
  created() {
    this.redirectUser();
  },
  methods: {
    redirectUser() {
      if (
        Object.keys(this.userStore.user).length === 0 ||
        this.userStore.user.admin === false
      ) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.button {
  background-color: #027b7f;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 100%;
  font-size: 25px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.button:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
}
</style>
