<template>
  <div>
    <div class="form">
      <vue-form
        :state="formState"
        @submit.prevent.stop="submitForm"
        style="width: 100%"
      >
        <validate tag="label" class="label">
          <span>Email</span>
          <input
            name="email"
            type="text"
            v-model="model.email"
            required
            placeholder="example@gmail.com"
          />
          <field-messages name="email" show="$dirty && $touched || $submitted">
            <div slot="required" class="error">Field required</div>
          </field-messages>
        </validate>

        <validate tag="label" class="label">
          <span>Password</span>
          <input
            name="password"
            type="text"
            v-model="model.password"
            required
            placeholder="******"
          />
          <field-messages
            name="password"
            show="$dirty && $touched || $submitted"
          >
            <div slot="required" class="error">Field required</div>
          </field-messages>
        </validate>

        <p :style="{ visibility }" class="error">{{ getErrorMessage }}</p>
        <button type="submit" class="button">Log in</button>
        <router-link :to="{ name: 'signup' }">
          <p class="text">Sign Up</p>
        </router-link>
      </vue-form>
    </div>
  </div>
</template>

<script>
const url = process.env.VUE_APP_MOCKAPI_URL;
import { mapGetters } from "vuex";

export default {
  name: "LoginPage",
  data: () => ({
    formState: {},
    model: {
      email: "",
      password: "",
    },
  }),
  computed: {
    ...mapGetters("user", ["getErrorMessage", "getIsUser", "loggedIn"]),
    visibility() {
      return this.getIsUser ? "hidden" : "visible";
    },
  },
  methods: {
    async submitForm() {
      if (this.formState.$valid) {
        const userQuery = `${url}/users?email=${this.model.email}`;
        await this.$store.dispatch("user/getUserLogInAction", {
          query: userQuery,
          password: this.model.password,
        });
        if (this.loggedIn) this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.form {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
}
.label {
  width: 100%;
  color: #171717;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  height: 75px;
}
input {
  border: 2px solid #bf1e62;
  padding: 8px 16px;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  margin: 2px 0 2px 0;
  color: #171717;
}

input::placeholder {
  color: rgba(105, 105, 105, 0.5);
}
input:focus {
  outline: none !important;
  border: 2px solid #d62957;
  color: #171717;
}

.error {
  color: red;
  font-size: 12px;
  margin-bottom: 5px;
}

.button {
  width: 100%;
  background-color: #572e4f;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.button:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
}

.text {
  margin-top: 15px;
  color: #572e4f;
  text-decoration: underline;
  text-align: center;
  font-size: 14px;
}
</style>
