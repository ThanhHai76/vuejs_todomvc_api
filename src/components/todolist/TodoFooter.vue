<template>
  <footer class="footer">
    <transition name="fade">
      <button
        class="clear-completed"
        @click="deleteTodoChecked()"
        v-show="todoChecked.length"
      >
      Delete checked
      </button>
    </transition>
  </footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  data() {
    return {}
  },
  computed: {
    todoChecked() {
      return this.$store.getters.checkedTodo
    },
  },
  methods: {
    deleteTodoChecked() {
      this.todoChecked.forEach(todo => {
        this.$store.dispatch('deleteTodo', todo)
      });
    },
  },
}
</script>
