import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://todo-mvc-api-typeorm.herokuapp.com'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    todos: [],
    editingTodo: false,
    newTodo: null,
    loading: false
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
})
