import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    product: [
      {code:'0001', name: 'Sekiro', stock:'100', price:'30000', color: 'red', featured: true},
      {code:'0002', name: 'Fifa 21', stock:'100', price:'25000', color: 'blue', featured: false},
      {code:'0003', name: 'Gears of War 4', stock:'100', price:'', color: '', featured: true},
      {code:'0004', name: 'Mario Tennis Aces', stock: '100', price: '35000', color: 'yellow', featured: false},
      {code:'0005', name: 'Bloodbrne', stock: '100', price: '10000', color: 'blue', featured: false},
      {code:'0006', name: 'Forza Horizon 4', stock:'100', price:'20000', color: 'red', featured: true},
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
});

export default store;
