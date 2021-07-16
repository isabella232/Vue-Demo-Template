const PersonnaModule = {
  namespaced: true,
  state: {
    personnaSelected: "",
    selectedPersonna: false
  },
  getters: {
    getPersonnaSelected(state) {
      return state.personnaSelected;
    },
    getSelectedPersonna(state){
      return state.selectedPersonna
    }
  },
  actions: {
    sendPersonnaSelected({commit},value){
      commit('SEND_PERSONNA_SELECTED', value)
    },
    selectedPersonna({commit}){
      commit('SELECTED_PERSONNA')
    },
    deletePersonna({commit}){
      commit('DELETE_PERSONNA')
    }
  },
  mutations: {
    SEND_PERSONNA_SELECTED(state, value){
      state.personnaSelected = value
    },
    SELECTED_PERSONNA(state){
      state.selectedPersonna = true
    },
    DELETE_PERSONNA(state){
      state.personnaSelected = ""
    }
  },
};

export default PersonnaModule;
