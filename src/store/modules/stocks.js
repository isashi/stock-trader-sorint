// state
// variabili
const state = {
  stocks: []
};

// getters
// leggere le variabili
const getters = {
  stocks: state => {
    return state.stocks;
  }
};

// mutations
// scrivere le variabili
const mutations = {};

// actions
// metodi tramite cui interagire con mutations / getters e con API esterne
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};