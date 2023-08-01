<template>
  <div>
    <TableProducts />
    <router-link
      :to="{ name: 'add-update-product', params: { id: 'new-product' } }"
    >
      <button class="button">+</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TableProducts from "@/components/admin/TableProducts.vue";

export default {
  name: "AdminPage",
  components: {
    TableProducts,
  },
  created() {
    this.redirectUser();
  },
  methods: {
    redirectUser() {
      if (!this.isAdmin) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters("user", ["isAdmin"]),
  },
};
</script>

<style scoped>
.button {
  background-color: #027b7f;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 100%;
  font-size: 30px;
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
