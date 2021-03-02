<template>
  <div class="card d-flex justify-content-center">
    <section class="todo-list">
      <todo-header></todo-header>

      <section class="main">
        <div class="list-group list-group-flush">
          <transition-group
            name="fade"
            enter-active-class="animated fadeInUp"
            leave-active-class="animated fadeOutDown"
          >
            <todo-item
              v-for="todo in filteredTodos"
              :key="todo.id"
              v-bind:todo="todo"
            ></todo-item>
          </transition-group>
        </div>
      </section>

      <todoFooter></todoFooter>
    </section>

    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Esc to cancel edit</p>
      <p>Enter to accept edit</p>
    </footer>
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoItem from "./TodoItem.vue";

const LOCAL_STORAGE_KEY = "todo-app-vue";
export default {
  name: "TodoList",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getTodos");
  },
  methods: {},
  computed: {
    filteredTodos() {
      return this.$store.getters.filteredTodos;
    },
  },
  watch: {
    filteredTodos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
      },
    },
  },
  components: {
    TodoHeader,
    TodoItem,
    TodoFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
