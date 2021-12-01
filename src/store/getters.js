export default {
  loggedIn: (state) => {
    return state.token !== null
  },
  getTodos(state) {
    return state.todos
  },
  itemsLeft: (state) => {
    return state.todos.filter((t) => t.status === 'active').length
  },
  isCheckAll: (state, getters) => {
    return getters.itemsLeft == 0
  },
  checkedTodo: (state) => {
    return state.todos.filter((t) => t.status === 'completed')
  },
}
