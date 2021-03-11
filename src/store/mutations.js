export default {
  login(state, token) {
    if (token) {
      state.token = token
    }
    state.loading = false
  },
  register(state){
    state.loading = false
  },
  logout(state) {
    state.token = null
    state.todos = []
  },
  
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
  deleteTodo(state, todo) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  },
  loading(state) {
    state.loading = true
  },
}
