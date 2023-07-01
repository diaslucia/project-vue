export const userStore = {
  user: {},

  setUser(value) {
    this.user = value;
  },

  loggedIn() {
    /* return  !!this.user */ // me da mal el dato
    return Object.keys(this.user).length != 0;
  },

  isAdmin() {
    return this.loggedIn && this.user?.admin;
  },

  logOut() {
    this.user = {};
  },
};
