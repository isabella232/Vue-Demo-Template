const SearchModule = {
  namespaced: true,
  state: {
    query: "",
  },
  getters: {
    getQuery(state) {
      return state.query;
    },
  },
  actions: {
    modifQuery({ commit }, value) {
      commit("MODIF_QUERY", value);
    },
  },
  mutations: {
    MODIF_QUERY(state, value) {
      state.query = value;
    },
  },
};

export default SearchModule;
