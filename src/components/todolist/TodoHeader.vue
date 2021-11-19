<template>
  <header class="header">
    <div class="logo">
      <img alt="Vue logo" src="../../assets/logo.png" />
    </div>
    <h1 class="card-title text-center">Todo List</h1>
    <div class="d-flex">
      <todo-check-all></todo-check-all>
      <input
        type="text"
        class="new-todo"
        placeholder="What needs to be done"
        v-model.trim="newTodo"
        @keyup.enter="createTodo()"
        spellcheck="false"
        autofocus
      />
      <button 
        @click="createTodo()" 
        class="btn btn-light btn-lg align-self-center mr-4">
       <i class="fas fa-angle-double-right"></i>
      </button>
    </div>
  </header>
</template>

<script>
import TodoCheckAll from './TodoCheckAll.vue'
export default {
  name: 'TodoHeader',
  data() {
    return {
      newTodo: this.$store.state.newTodo,
    }
  },
  methods: {
    createTodo() {
      if (!this.newTodo) {
        return
      }
      this.$store.dispatch('addTodo', {
        content: this.newTodo
      })
      this.newTodo = null
    },
  },
  components: {
      TodoCheckAll
  }
}
</script>
