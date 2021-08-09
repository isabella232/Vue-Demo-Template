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
      console.log("JE SUIS DANS ACTION");
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
