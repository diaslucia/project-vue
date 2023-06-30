<template>
  <div class="form">
    <vue-form
      :state="formState"
      @submit.prevent.stop="submitForm"
      style="width: 100%"
    >
      <validate tag="label" class="label">
        <span>Name of product</span>
        <input
          name="name"
          type="text"
          v-model="model.name"
          required
          placeholder="Glazed donut"
        />
        <field-messages name="name" show="$dirty && $touched || $submitted">
          <div slot="required" class="error">Field required</div>
        </field-messages>
      </validate>

      <validate tag="label" class="label">
        <span>Description</span>
        <input
          name="description"
          type="text"
          v-model="model.description"
          required
          placeholder="Glazed donut"
        />
        <field-messages
          name="description"
          show="$dirty && $touched || $submitted"
        >
          <div slot="required" class="error">Field required</div>
        </field-messages>
      </validate>

      <validate tag="label" class="label">
        <span>Price</span>
        <input
          name="price"
          type="number"
          v-model="model.price"
          required
          placeholder="25"
        />
        <field-messages name="price" show="$dirty && $touched || $submitted">
          <div slot="required" class="error">Field required</div>
        </field-messages>
      </validate>

      <validate tag="label" class="label">
        <span>URL image</span>
        <input
          name="image"
          type="text"
          v-model="model.image"
          required
          placeholder="https://image.com/132"
        />
        <field-messages name="image" show="$dirty && $touched || $submitted">
          <div slot="required" class="error">Field required</div>
        </field-messages>
      </validate>

      <button type="submit" class="button">Submit</button>
    </vue-form>
  </div>
</template>

<script>
import { userStore } from "@/store/userStore";
const apiProductos = process.env.VUE_APP_MOCKAPI_URL;

export default {
  name: "NewProductPage",
  data: () => ({
    formState: {},
    model: {
      name: "",
      description: "",
      quantity: 1,
      price: "",
      image: "",
    },
    userStore,
  }),
  methods: {
    submitForm() {
      if (this.formState.$valid) {
        fetch(`${apiProductos}/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...this.model, subtotal: this.model.price }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .finally(() => {
            this.$router.push("/admin");
          });
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
</style>
