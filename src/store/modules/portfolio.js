const state = {
  portfolioStocks: [],
  funds: 10000
};

const mutations = {
  BUY_STOCK(state, {
    stockId,
    quantity,
    stockPrice
  }) {
    const record = state.portfolioStocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.portfolioStocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= quantity * stockPrice;
  },
  SELL_STOCK(state, {
    stockId,
    quantity,
    stockPrice
  }) {
    const record = state.portfolioStocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.portfolioStocks.splice(state.portfolioStocks.indexOf(record), 1);
    }
    state.funds += quantity * stockPrice;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.portfolioStocks = portfolio.stockPortfolio;
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.portfolioStocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      console.log(record, stock);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

const actions = {
  buyStock({
    commit
  }, order) {
    commit("BUY_STOCK", order);
  },
  sellStock({
    commit
  }, order) {
    commit("SELL_STOCK", order);
  }
};

export default {
  getters,
  actions,
  mutations,
  state
};