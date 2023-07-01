export const userStore = {
  user: {},

  setUser(value) {
    this.user = value;
  },

  loggedIn() {
    return !!this.user.lenght > 0;
  },

  isAdmin() {
    return this.loggedIn && this.user?.admin;
  },

  logOut() {
    this.user = {};
  },
};
