export const cartModule = {
  namespaced: true,
  state: {
    cart: [],
    loading: true,
  },
  getters: {
    getTotalQuantity(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.subtotal, 0);
    },
  },
  mutations: {
    setCart(state, payload) {
      state.cart = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setEmptyCart(state) {
      state.cart = [];
    },
    deleteProduct(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    getCartAction: (context) => {
      context.commit("setLoading", true);
    },
    setEmptyCartAction: (context) => {
      context.commit("setEmptyCart");
    },
    deleteProductAction: (context, payload) => {
      let filteredProducts = this.cart.filter((prod) => prod.id != payload.id);
      context.commit("deleteProduct", filteredProducts);
    },
    sumProductAction: (context, payload) => {
      let findProduct = this.cart.find((prod) => prod.id === payload.id);
      findProduct.quantity++;
      findProduct.subtotal = Number(findProduct.price * findProduct.quantity);
    },
  },
};
