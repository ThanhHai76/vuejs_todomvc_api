<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ itemsLefts }}</strong> item(s) left
    </span>
    <transition name="fade">
      <button
        class="clear-completed"
        @click="clearCompleted()"
        v-show="todoCompleted.length"
      >
      Delete done
      </button>
    </transition>
  </footer>
</template>

<script>
export default {
  name: 'todo-footer',
  props: {},
  data() {
    return {}
  },
  computed: {
    itemsLefts() {
      return this.$store.getters.itemsLeft
    },
    todoCompleted() {
      return this.$store.getters.completedTodos
    },
  },
  methods: {
    clearCompleted() {
      this.todoCompleted.forEach(todo => {
        this.$store.dispatch('deleteTodo', todo)
      });
    },
  },
}
</script>

<style scoped></style>
