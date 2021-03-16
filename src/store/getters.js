export default {
  loggedIn: (state) => {
    return state.token !== null
  },
  itemsLeft: (state) => {
    return state.todos.filter((t) => t.checked === false).length
  },
  checkAll: (state, getters) => {
    return getters.itemsLeft == 0
  },
  checkedTodo: (state) => {
    return state.todos.filter((t) => t.checked === true)
  },
}
