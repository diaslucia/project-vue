<template>
  <div>
    <SpinnerSpin v-if="getLoading" />
    <div class="container" v-else>
      <div v-for="(user, i) in getUsers" :key="i">
        <div v-if="user.order.length > 0">
          <div class="userContainer">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
          </div>

          <div v-for="(data, i) in user.order" :key="i" class="firstTable">
            <div class="textContainer">
              <p class="timestamp">
                {{ data.timestamp }}
              </p>
              <p class="total">Total: US$ {{ data.total }}</p>
            </div>
            <div class="line"></div>

            <table v-for="(product, i) in data.products" :key="i">
              <tr class="card">
                <td class="center_td">
                  <img :src="product.image" :alt="product.name" class="img" />
                </td>
                <td class="title bigger_space">{{ product.name }}</td>
                <td class="text center_td">US$ {{ product.price }}</td>
                <td class="text">quantity: {{ product.quantity }}</td>
                <td class="text">subtotal: US${{ product.subtotal }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerSpin from "@/components/SpinnerSpin.vue";
import { mapGetters } from "vuex";

export default {
  name: "OrdersPage",
  components: {
    SpinnerSpin,
  },
  created() {
    this.fetchData();
    this.redirectUser();
  },
  methods: {
    redirectUser() {
      if (!this.isAdmin) {
        this.$router.push("/");
      }
    },
    async fetchData() {
      this.$store.dispatch("user/fetchUsersAction");
    },
  },
  computed: {
    ...mapGetters("user", ["getUsers", "getLoading", "isAdmin"]),
  },
};
</script>

<style scoped>
.userContainer {
  display: flex;
  justify-content: space-around;
  background-color: #572e4f;
  padding: 10px 0;
  width: 100%;
  border-radius: 15px;
  margin-top: 30px;
  text-align: center;
  color: white;
  font-size: 16px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  height: 100%;
  padding: 60px 0;
}

.firstTable {
  margin: 30px 0;
}

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

.line {
  width: 100%;
  height: 1px;
  background-color: #572e4f;
  margin: 10px 0;
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

.textContainer {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
}

.timestamp {
  font-size: 12px;
  color: #171717;
}

.total {
  color: #572e4f;
  font-size: 16px;
  text-align: end;
  margin-right: 30px;
  font-weight: bold;
}
</style>
