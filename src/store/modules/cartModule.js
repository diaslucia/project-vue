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
    filterById: (state) => (id) => {
      return state.cart.filter((prod) => prod.id !== id);
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
    pushProduct(state, payload) {
      state.cart.push(payload);
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
      let filteredProducts = getters.filterById(payload.id);
      commit("setCart", filteredProducts);
    },
    sumProductAction: ({ getters }, payload) => {
      let findProduct = getters.findById(payload.id);
      findProduct.quantity++;
      /* 
      commit("setCart", [
        ...getters.getCart,
        {
          ...findProduct,
          quantity: findProduct.quantity + 1,
          subtotal: Number(findProduct.price * (findProduct.quantity + 1)),
        },
      ]); */
    },
    substractProductAction: ({ getters, commit }, payload) => {
      let findProduct = getters.findById(payload.id);
      if (findProduct.quantity > 0) {
        commit("setCart", [
          ...getters.getCart,
          {
            ...findProduct,
            quantity: findProduct.quantity - 1,
            subtotal: Number(findProduct.price * (findProduct.quantity - 1)),
          },
        ]);
      }
    },
    addToCartAction: ({ getters, commit }, payload) => {
      let findProduct = getters.findById(payload.product.id);
      if (findProduct) {
        commit("setCart", {
          ...findProduct,
          quantity: payload.quantitySelected,
          subtotal: Number(payload.product.price * payload.quantitySelected),
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
