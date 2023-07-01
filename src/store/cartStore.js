export const cartStore = {
  cart: [],

  cartTotal() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  },

  cartTotalPrice() {
    return this.cart.reduce((total, item) => total + item.subtotal, 0);
  },

  addToCart(product, quantitySelected) {
    let findProduct = this.cart.find((prod) => prod.id === product.id);
    if (findProduct) {
      findProduct.quantity = quantitySelected;
      findProduct.subtotal = Number(findProduct.price * quantitySelected);
    } else {
      this.cart.push({
        ...product,
        quantity: quantitySelected,
        subtotal: Number(product.price * quantitySelected),
      });
    }
  },

  substractProduct(product) {
    let findProduct = this.cart.find((prod) => prod.id === product.id);
    if (findProduct.quantity > 0) {
      findProduct.quantity--;
      findProduct.subtotal = Number(findProduct.price * findProduct.quantity);
    }
  },

  sumProduct(product) {
    let findProduct = this.cart.find((prod) => prod.id === product.id);
    findProduct.quantity++;
    findProduct.subtotal = Number(findProduct.price * findProduct.quantity);
  },

  deleteProduct(product) {
    let filteredProducts = this.cart.filter((prod) => prod.id != product.id);
    this.cart = filteredProducts;
  },

  emptyCart() {
    this.cart = [];
  },
};
