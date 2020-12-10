import Vue from 'vue'
import Vuex from 'vuex'
import defaultPair from '@/assets/defaultpair.json'
// import User from './user'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    currencies: localStorage.hasOwnProperty('vue-crypto-currencies-new')? JSON.parse(localStorage.getItem('vue-crypto-currencies-new')) : defaultPair,
    tickers: {},
    chartData: [],
    user:{
      loggedIn: false,
      data:null
    }
  },
  getters: {
    getSymbolById: state => (symbol) => {
      return state.currencies.find(s => s.symbol === symbol);
    },
    getTickerById: state => (symbol) => {
      return state.tickers[symbol]
    },
    user(state){
      return state.user
    }
  },
  mutations: {
    UPDATE_TICKER: (state, payload) => {
      const tick = state.tickers[payload.symbol]
      payload.pchg = tick ? (payload.price > tick.price? 1 : -1 ) : 1
      Vue.set(state.tickers, payload.symbol, payload)
    },
    ADD_COIN_PAIR: (state, payload) => {
      if(!state.tickers[payload.symbol]) {
        state.currencies.push(payload);
        localStorage.setItem('vue-crypto-currencies-new', JSON.stringify(state.currencies))
      }
      Vue.set(state.tickers, payload.symbol, { pchg: 1 })

    },
    REMOVE_COIN_PAIR: (state, symbol) => {
      Vue.delete(state.tickers, symbol)
      state.currencies.splice(state.currencies.findIndex(s => s.symbol === symbol), 1);
      localStorage.setItem('vue-crypto-currencies-new', JSON.stringify(state.currencies))
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  modules:{
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
})
