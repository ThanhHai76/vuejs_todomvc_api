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
  name: 'todo-check-all',
  data() {
    return {}
  },
  props: {},
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
      const check = event.target.checked
      if (check) {
        this.status = 'completed'
      } else {
        this.status = 'active'
      }
      this.$store.dispatch('checkAll', this.status)
    },
  },
}
</script>

<style scoped></style>
