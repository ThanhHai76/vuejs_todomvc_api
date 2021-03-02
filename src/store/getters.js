export default {
  loggedIn: (state) => {
    return state.token !== null;
  },
  itemsLeft: (state) => {
    return state.todos.filter((t) => t.status === 'active').length;
  },
  checkAll: (state, getters) => {
    return getters.itemsLeft == 0
  },
  activeTodos: (state) => {
    return state.todos.filter((t) => t.status === 'active');
  },
  completedTodos: (state) => {
    return state.todos.filter((t) => t.status === 'completed');
  },
  filteredTodos: (state) => {
    if (state.route === "all") {
      return state.todos;
    } else if (state.route === "active") {
      return state.todos.filter((t) => t.status === 'active');
    } else if (state.route === "completed") {
      return state.todos.filter((t) => t.status === 'completed');
    }
    return state.todos
  },
};
