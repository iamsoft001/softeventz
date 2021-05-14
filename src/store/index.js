import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: null,
  },
  mutations: {
    ACTIVE_USER(state, payload) {
      state.activeUser = payload;
    },
  },
  actions: {
    setActiveUser({ commit }, payload) {
      commit("ACTIVE_USER", payload);
    },
  },
  modules: {},
});
