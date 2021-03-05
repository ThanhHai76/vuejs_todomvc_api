import axios from 'axios'
export default {
  getTodos(state, todos) {
    state.todos = todos
  },
  addTodo(state, todo) {
    state.todos.push({
      id: todo.id,
      content: todo.content,
      status: todo.status,
    })
  },
  updateTodo(state, todo) {
    const index = state.todos.findIndex((t) => t.id == todo.id)
    state.todos.splice(index, 1, todo)
  },
  checkAll(state, status) {
    state.todos.forEach((todo) => {
      axios
        .put('/api/todos/' + todo.id, {
          status: status,
        })
        .then(() => {
          todo.status = status
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
  deleteTodo(state, todo) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  },
  clearTodos(state) {
    state.todos = []
  },
  clearCompleted(state) {
    state.todos = state.todos.filter((todo) => todo.status === 'active')
  },

  login(state, token) {
    state.token = token
    state.loading = false
  },
  destroyToken(state) {
    state.token = null
  },
  loading(state){
    state.loading = true
  },
  stopLoading(state){
    state.loading = false
  },
}
