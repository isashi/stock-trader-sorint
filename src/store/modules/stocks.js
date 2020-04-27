import stocks from "../../data/stocks";

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
const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

// actions
// metodi tramite cui interagire con mutations / getters e con API esterne
const actions = {
  initStocks: ({
    commit
  }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({
    commit
  }) => {
    commit("RND_STOCKS");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};