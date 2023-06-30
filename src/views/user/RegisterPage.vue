<template>
  <div>
    <div class="form">
      <vue-form
        :state="formState"
        @submit.prevent.stop="getUser"
        style="width: 100%"
      >
        <validate tag="label" class="label">
          <span>Name</span>
          <input
            name="name"
            type="text"
            v-model="model.name"
            minlength="3"
            maxlength="10"
            required
            placeholder="John Doe"
          />
          <field-messages name="name" show="$dirty && $touched || $submitted">
            <div slot="required" class="error">Field required</div>
            <div slot="minlength" class="error">
              Name should contain at least 3 characters
            </div>
            <div slot="maxlength" class="error">
              Name needs to be less than 10 characters
            </div>
          </field-messages>
        </validate>

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
            <div slot="email" class="error">Enter a valid email</div>
          </field-messages>
        </validate>

        <validate tag="label" class="label">
          <span>Password</span>
          <input
            name="password"
            type="text"
            v-model="model.password"
            required
            minlength="6"
            placeholder="******"
          />
          <field-messages
            name="password"
            show="$dirty && $touched || $submitted"
          >
            <div slot="required" class="error">Field required</div>
            <div slot="minlength" class="error">
              Password should contain at least 6 characters
            </div>
          </field-messages>
        </validate>

        <p
          :style="user ? { visibility: 'hidden' } : { visibility: 'visible' }"
          class="error"
        >
          Email already registered
        </p>
        <button type="submit" class="button">Register</button>
        <router-link :to="{ name: 'login' }">
          <p class="text">Log in</p>
        </router-link>
      </vue-form>
    </div>
  </div>
</template>

<script>
const url = process.env.VUE_APP_MOCKAPI_URL;
import { userStore } from "@/store/userStore";

export default {
  name: "RegisterPage",
  data: () => ({
    formState: {},
    model: {
      name: "",
      email: "",
      password: "",
    },
    spinner: true,
    userStore,
    user: true,
  }),
  methods: {
    async getUser() {
      const userQuery = `${url}/users?email=${this.model.email}`;

      fetch(`${userQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data[0]) {
            this.postUser();
          } else {
            this.user = false;
          }
        })
        .finally(() => {
          this.spinner = false;
        });
    },
    async postUser() {
      fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...this.model, admin: false, order: [] }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.userStore.user = data;
          this.$router.push("/");
        })
        .finally(() => {
          this.spinner = false;
        });
    },
    submitForm() {
      if (this.formState.$valid) {
        this.postUser();
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
