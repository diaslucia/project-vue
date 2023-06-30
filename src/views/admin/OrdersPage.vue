<template>
  <div>
    <SpinnerSpin v-if="spinner" />
    <div class="container" v-else>
      <p>ordenes</p>
    </div>
  </div>
</template>

<script>
const url = process.env.VUE_APP_MOCKAPI_URL;
import { userStore } from "@/store/userStore";
import SpinnerSpin from "@/components/SpinnerSpin.vue";

export default {
  name: "OrdersPage",
  data: () => ({
    orders: [],
    spinner: true,
    userStore,
  }),
  components: {
    SpinnerSpin,
  },
  created() {
    this.fetchData();
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
    async fetchData() {
      try {
        let users = await (await fetch(`${url}/users`)).json();
        this.filterOrders(users);
      } catch (err) {
        this.fetchError = "Error de conexión.";
        console.log(err);
      }
    },
    filterOrders(users) {
      let copyUsers = [...users];
      for (let i = 0; i <= copyUsers.length; i++) {
        if (users[i].order.length > 0) {
          console.log(users[i].order);
          /*   this.orders.push(users[i].order); */
        }
      }
      this.spinner = false;
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
</style>
