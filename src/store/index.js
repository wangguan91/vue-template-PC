import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from './getters'

import products from './modules/products'
const store = new Vuex.Store({
  modules: {
    products
  },
  getters
})

export default store