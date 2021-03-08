<template>
  <div
    class="list-group-item"
    :class="{
      completed: status,
      editing: editingTodo,
    }"
  >
    <div class="view">
      <input
        class="check-box"
        type="checkbox"
        v-on:change="updateTodo"
        v-model="status"
      />
      <label class="content" @dblclick="startEditing()">{{
        todo.content
      }}</label>
      <button
        class="btn btn-primary btn-edit btn-item"
        @click="startEditing()"
      ></button>
      <button class="destroy btn-item" @click="destroy()"></button>
    </div>
    <button class="btn btn-exit-editing" @click="cancelEditing()">x</button>
    <input
      class="edit form-control"
      @keyup.escape="cancelEditing()"
      @keyup.enter="finishEditing()"
      v-model.trim="todo.content"
      spellcheck="false"
    />
  </div>
</template>

<script>
export default {
  name: "todo-item",
  data() {
    return {
      editingTodo: this.$store.state.editingTodo,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    status: {
      get() {
        return this.todo.status === 'completed'
      },
      set(value) {
        if (value) {
          this.todo.status = 'completed'
        } else {
          this.todo.status = 'active'
        }
      },
    },
  },
  methods: {
    startEditing() {
      this.editingTodo = true
      this.beforeEditCache = this.todo.content
    },
    finishEditing() {
      if (this.todo.content === '') {
        this.todo.content = this.beforeEditCache
      } else {
        this.updateTodo()
      }
      this.editingTodo = false
    },
    cancelEditing() {
      this.editingTodo = false
      this.todo.content = this.beforeEditCache
    },
    updateTodo() {
      this.$store.dispatch('updateTodo', this.todo)
    },
    destroy() {
      this.$store.dispatch('deleteTodo', this.todo)
    },
  },
};
</script>

<style scoped>
.list-group-item .btn-edit {
  font-size: 12px;
  right: 50px;
  width: 60px;
  height: 30px;
}

.btn-item {
  top: 0;
  bottom: 0;
  margin: auto 0;
  transition: color 0.2s ease-out;
  display: none;
  position: absolute;
}

.list-group-item .btn-edit:hover {
  color: gray;
}

.list-group-item .btn-edit:after {
  content: "Edit";
}

.list-group-item.editing .btn-exit-editing {
  display: block;
  position: absolute;
  right: 20px;
  background-color:gray;
  z-index: 9;
  color: white;
}
</style>
