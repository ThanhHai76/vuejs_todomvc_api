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
              v-for="todo in getTodos"
              :key="todo.id"
              v-bind:todo="todo"
            ></todo-item>
          </transition-group>
        </div>
      </section>

      <todoFooter></todoFooter>
    </section>

    <footer class="info">
      <p>Double-click / Click edit button to edit a todo</p>
      <p>Esc / Click X to cancel edit</p>
      <p>Enter / Click save button to accept edit</p>
    </footer>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getTodos')
  },
  methods: {},
  computed: {
    getTodos() {
      return this.$store.state.todos
    },
  },
  components: {
    TodoHeader,
    TodoItem,
    TodoFooter,
  },
};
</script>

<style scoped>
</style>
