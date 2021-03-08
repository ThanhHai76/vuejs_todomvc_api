import axios from 'axios'
export default {
  register({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/register', {
        username: data.name,
        password: data.password,
      })
      .then((response) => {
        commit('register')
        resolve(response)
      })
      .catch((error) => {
        commit('stopLoading')
        reject(error)
      })
    })
  },
  login({commit}, data) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/login', {
          username: data.username,
          password: data.password,
        })
        .then((response) => {
          const token = response.data.token
          localStorage.setItem('access_token', token)
          commit('login', token)
          resolve(response)
        })
        .catch((error) => {
          commit('stopLoading')
          reject(error)
        })
    })
  },
  destroyToken(context) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + context.state.token
    if (context.getters.loggedIn) {
      localStorage.removeItem('access_token')
      context.commit('destroyToken')
    }
  },
  getTodos(context) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + context.state.token
    axios
      .get('/api/todos')
      .then((response) => {
        context.commit('getTodos', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  addTodo({commit}, todo) {
    axios
      .post('/api/todos', {
        content: todo.content,
        status: todo.status,
      })
      .then((response) => {
        commit('addTodo', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  checkAll({commit}, status) {
    commit('checkAll', status)
  },
  updateTodo({ commit }, todo) {
    axios
      .put('/api/todos/' + todo.id, {
        content: todo.content,
        status: todo.status,
      })
      .then(() => {
        commit('updateTodo', todo)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  deleteTodo({ commit }, todo) {
    axios
      .delete('/api/todos/' + todo.id)
      .then(() => {
        commit('deleteTodo', todo)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  clearCompleted(context) {
    context.getters.completedTodos.forEach((todo) => {
      axios
        .delete('/api/todos/' + todo.id)
        .then(() => {
          context.commit('clearCompleted')
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
}
