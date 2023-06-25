export const cartStore = {
  cart: [],

  cartTotal() {
    return this.cart.reduce((total, item) => total + item.qty, 0);
  },

  cartTotalPrice() {
    return this.cart.reduce((total, item) => total + item.subtotal, 0);
  },

  addToCart(product) {
    this.cart.push({
      ...product,
      qty: 1,
      subtotal: product.price,
    });
  },
};
