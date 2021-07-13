const HeaderModule = {
  namespaced: true,
  state: {
    catOne: false,
    searchVisible: false,
    catTwo: false,
    showFederatedSearch: false,
    showModal: false,
  },
  getters: {
    getShowFederatedSearch(state) {
      return state.showFederatedSearch;
    },
    getShowModal(state) {
      return state.showModal;
    },
    getCatOne(state) {
      return state.catOne;
    },
    getCatTwo(state) {
      return state.catTwo;
    },
  },
  actions: {
    logoFunction({ commit }) {
      commit("LOGO_FUNCTION");
    },
    catTwoFunction({ commit }) {
      commit("CAT_TWO_FUNCTION");
    },
    catOneFunction({ commit }) {
      commit("CAT_ONE_FUNCTION");
    },
    svgClick({ commit }) {
      commit("SVG_CLICK");
    },
  },
  mutations: {
    LOGO_FUNCTION(state) {
      state.catOne = true;
      state.searchVisible = false;
      state.catTwo = false;
    },
    CAT_TWO_FUNCTION(state) {
      state.catOne = false;
      state.searchVisible = false;
      state.catTwo = true;
      state.showFederatedSearch = false;
      state.showModal = false;
    },
    SVG_CLICK(state) {
      state.showFederatedSearch = !state.showFederatedSearch;
      state.catTwo = false;
      state.catOne = false;
      state.showModal = !state.showModal;
    },
    CAT_ONE_FUNCTION(state) {
      state.catOne = true;
      state.searchVisible = false;
      state.catTwo = false;
      state.showFederatedSearch = false;
      state.showModal = false;
    },
  },
};

export default HeaderModule;
