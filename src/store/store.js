import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);
axios.defaults.baseURL = "https://todo-mvc-api-typeorm.herokuapp.com";
const LOCAL_STORAGE_KEY = "todo-app-vue";

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
    editingTodo: false,
    newTodo: null,
    route: "all",
    loggedIn: false,
    response: {
      message: null,
      username: null
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
});
