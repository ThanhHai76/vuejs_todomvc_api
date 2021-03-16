<template>
  <div class="form-check d-flex align-self-center">
    <input
      class="check-box"
      type="checkbox"
      :checked="isCheckAll"
      @change="checkAll"
      v-show="getTodos.length"
    />
    <label for="check-box"></label>
  </div>
</template>

<script>
export default {
  name: 'TodoCheckAll',
  computed: {
    getTodos() {
      return this.$store.state.todos
    },
    isCheckAll() {
      return this.$store.getters.checkAll
    },
  },
  methods: {
    checkAll(event) {
      const checked = event.target.checked
      this.getTodos.forEach((todo) => {
        this.$store.dispatch('checkTodo', {
          id: todo.id,
          content: todo.content,
          checked: checked
        })
      });
    },
  },
}
</script>
