const HeaderModule = {
  namespaced: true,
  state: {
    catOne: false,
    searchVisible: false,
    catTwo: false,
    showFederatedSearch: false
  },
  getters: {
    getShowFederatedSearch(state){
      return state.showFederatedSearch
    }
  },
  actions: {
    logoFunction({commit}){
      commit("LOGO_FUNCTION")
    },
    catTwoFunction({commit}){
      commit("CAT_TWO_FUNCTION")
    },
    svgClick({commit}){
      commit("SVG_CLICK")
    }
  },
  mutations: {
    LOGO_FUNCTION(state){
      state.catOne = true;
      state.searchVisible = false;
      state.catTwo = false
    },
    CAT_TWO_FUNCTION(state){
      state.catOne = false;
      state.searchVisible = false;
      state.catTwo = true;
      state.showFederatedSearch = false;
    },
    SVG_CLICK(state){
      state.showFederatedSearch = !state.showFederatedSearch;
      state.catTwo = false;
      state.catOne = false;
    }
  },
};

export default HeaderModule;
