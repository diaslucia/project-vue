export const cartModule = {
  namespaced: true,
  state: {
    cart: [],
    loading: true,
  },
  getters: {
    getTotalQuantity(state) {
      return state.cart.reduce((q, item) => q + item.quantity, 0);
    },
    getTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.subtotal, 0);
    },
    getCart(state) {
      return state.cart;
    },
    getCartLength(state) {
      return state.cart.length;
    },
    findById: (state) => (id) => {
      return state.cart.find((prod) => prod.id === id);
    },
    findIndexById: (state) => (id) => {
      return state.cart.findIndex((prod) => prod.id === id);
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setEmptyCart(state) {
      state.cart = [];
    },
    pushProduct(state, payload) {
      state.cart.push(payload);
    },
    removeFromCart: (state, index) => {
      state.cart.splice(index, 1);
    },
    replaceProduct: (state, payload) => {
      state.cart.splice(payload.index, 1, payload.replacement);
    },
  },
  actions: {
    getCartAction: (context) => {
      context.commit("setLoading", true);
    },
    setEmptyCartAction: (context) => {
      context.commit("setEmptyCart");
    },
    deleteProductAction: ({ getters, commit }, payload) => {
      let indexProduct = getters.findIndexById(payload.id);
      commit("removeFromCart", indexProduct);
    },
    sumProductAction: ({ getters, commit }, payload) => {
      let findProduct = getters.findById(payload.id);
      let indexProduct = getters.findIndexById(payload.id);

      commit("replaceProduct", {
        index: indexProduct,
        replacement: {
          ...findProduct,
          quantity: findProduct.quantity + 1,
          subtotal: Number(findProduct.price * (findProduct.quantity + 1)),
        },
      });
    },
    substractProductAction: ({ getters, commit }, payload) => {
      let findProduct = getters.findById(payload.id);
      let indexProduct = getters.findIndexById(payload.id);

      if (findProduct.quantity > 0) {
        commit("replaceProduct", {
          index: indexProduct,
          replacement: {
            ...findProduct,
            quantity: findProduct.quantity - 1,
            subtotal: Number(findProduct.price * (findProduct.quantity - 1)),
          },
        });
      }
    },
    addToCartAction: ({ getters, commit }, payload) => {
      let findProduct = getters.findById(payload.product.id);
      let indexProduct = getters.findIndexById(payload.id);

      if (findProduct) {
        commit("replaceProduct", {
          index: indexProduct,
          replacement: {
            ...findProduct,
            quantity: findProduct.quantity + payload.quantitySelected,
            subtotal: Number(
              payload.product.price *
                (payload.quantitySelected + findProduct.quantity)
            ),
          },
        });
      } else {
        commit("pushProduct", {
          ...payload.product,
          quantity: payload.quantitySelected,
          subtotal: Number(payload.product.price * payload.quantitySelected),
        });
      }
    },
  },
};
