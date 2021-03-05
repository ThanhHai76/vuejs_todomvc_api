export default {
  loggedIn: (state) => {
    return state.token !== null
  },
  itemsLeft: (state) => {
    return state.todos.filter((t) => t.status === 'active').length
  },
  checkAll: (state, getters) => {
    return getters.itemsLeft == 0
  },
  activeTodos: (state) => {
    return state.todos.filter((t) => t.status === 'active')
  },
  completedTodos: (state) => {
    return state.todos.filter((t) => t.status === 'completed')
  },
}
