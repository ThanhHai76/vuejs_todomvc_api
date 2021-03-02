<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ itemsLefts }}</strong> item(s) left
    </span>
    <ul class="filters d-flex justify-content-center">
      <li class="router">
        <router-link to="/todo/all" :class="{ selected: getRoute === 'all' }"
          ><button @click="filteredTodos('all')">All</button>
        </router-link>
      </li>
      <li class="router">
        <router-link to="/todo/active" :class="{ selected: getRoute === 'active' }">
          <button @click="filteredTodos('active')">Active</button></router-link
        >
      </li>
      <li class="router">
        <router-link
          to="/todo/completed"
          :class="{ selected: getRoute === 'completed' }"
          ><button @click="filteredTodos('completed')">Completed</button>
        </router-link>
      </li>
    </ul>
    <transition name="fade">
      <button
        class="clear-completed"
        @click="clearCompleted()"
        v-show="todoCompleted.length"
      >
        Clear completed
      </button>
    </transition>
  </footer>
</template>

<script>
export default {
  name: "todo-footer",
  props: {},
  data() {
    return {};
  },
  computed: {
    getRoute() {
      return this.$store.state.route;
    },
    itemsLefts() {
      return this.$store.getters.itemsLeft;
    },
    todoCompleted() {
      return this.$store.getters.completedTodos;
    },
  },
  methods: {
    clearCompleted() {
      this.$store.dispatch("clearCompleted");
    },
    filteredTodos(status) {
      this.$store.dispatch("filteredTodo", status);
    },
  },
};
</script>

<style scoped></style>
