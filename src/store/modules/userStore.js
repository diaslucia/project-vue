import { fetchHelper } from "@/services/fetchHelper.js";
const url = process.env.VUE_APP_MOCKAPI_URL;

export const userModule = {
  namespaced: true,
  state: {
    user: {},
    users: [],
    loading: true,
    isUser: true,
    errorMessage: "",
  },
  getters: {
    loggedIn(state) {
      return !!state.user.id;
    },
    isAdmin(state) {
      return !!state.user.id && state.user?.admin;
    },
    getUser(state) {
      return state.user;
    },
    getLoading(state) {
      return state.loading;
    },
    getUsers(state) {
      return state.users;
    },
    getIsUser(state) {
      return state.isUser;
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
  },
  mutations: {
    logOut(state) {
      state.user = {};
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUsers(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setIsUser(state, payload) {
      state.isUser = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
  },
  actions: {
    logOutAction(context) {
      context.commit("logOut");
    },
    setUserAction(context) {
      context.commit("setUser");
    },
    fetchUsersAction: async (context) => {
      context.commit("setLoading", true);
      try {
        let res = await fetchHelper.get(`${url}/users`);
        context.commit("setUsers", res);
        context.commit("setLoading", false);
      } catch (err) {
        console.log(err);
      }
    },
    getUserSignUpAction: async (context, payload) => {
      try {
        let data = await fetchHelper.get(payload);
        if (data[0]) {
          context.commit("setErrorMessage", "Email already registered");
          context.commit("setIsUser", false);
          return false;
        } else {
          context.commit("setIsUser", true);
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    getUserLogInAction: async (context, payload) => {
      try {
        let data = await fetchHelper.get(payload[0]);
        if (!data[0]) {
          context.commit("setErrorMessage", "User not found");
          context.commit("setIsUser", false);
        } else {
          context.commit("setIsUser", true);
          if (data[0].password === payload[1]) {
            context.commit("setUser", data[0]);
            return true;
          } else {
            context.commit("setIsUser", false);
            context.commit("setErrorMessage", "Invalid password");
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    postUserAction: async (context, payload) => {
      try {
        let data = await fetchHelper.post(`${url}/users`, {
          ...payload,
          admin: false,
          order: [],
        });
        context.commit("setUser", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
