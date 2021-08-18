const SearchModule = {
  namespaced: true,
  state: {
    query: "",
    ProductDetails: null,
  },
  getters: {
    getQuery(state) {
      return state.query;
    },
    getProductDetails(state) {
      return state.ProductDetails;
    },
  },
  actions: {
    modifQuery({ commit }, value) {
      commit("MODIF_QUERY", value);
    },
    selectedProduct({ commit }, value) {
      commit("SELECTED_PRODUCT", value);
    },
    closeModal({commit}){
      commit("SELECTED_PRODUCT", null);
    }
  },
  mutations: {
    MODIF_QUERY(state, value) {
      state.query = value;
    },
    SELECTED_PRODUCT(state, value) {
      state.ProductDetails = value;
    },
  },
};

export default SearchModule;
