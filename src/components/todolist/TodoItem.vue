<template>
  <div
    class="list-group-item"
    :class="{
      completed: todoChecked,
      editing: editingTodo,
    }"
  >
    <div class="view">
      <input
        class="check-box"
        type="checkbox"
        v-on:change="updateTodo"
        :checked="todoChecked"
      />
      <label class="content" @dblclick="startEditing()">{{
        todo.content
      }}</label>
      <button class="btn btn-light btn-edit btn-item" @click="startEditing()">
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button class="destroy btn-item" @click="deleteTodo()"></button>
    </div>
    <div class="input-group">
      <input
        class="edit form-control"
        type="text"
        @keyup.enter="finishEditing()"
        @keyup.escape="cancelEditing()"
        @blur="finishEditing()"
        v-model.trim="todo.content"
        spellcheck="false"
        v-edit-focus="editingTodo"
      />
      <button class="btn btn-primary btn-editing btn-save" 
        @mousedown="finishEditing()">
        <i class="fas fa-save"></i>
      </button>
      <button class="btn btn-secondary btn-editing btn-exit" 
        @mousedown="cancelEditing()">
        x
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      editingTodo: this.$store.state.editingTodo,
    };
  },
  computed: {
    todoChecked(){
      return this.todo.status === 'completed'
    }
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
    updateTodo(event) {
      if(event){
        const checked = event.target.checked
        checked ? this.todo.status = 'completed' : this.todo.status = 'active'
      }
      this.$store.dispatch('updateTodo', this.todo)
    },
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
    },
  },
  directives: {
    'edit-focus': function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
	}
};
</script>

<style scoped>
.list-group-item .btn-edit {
  font-size: 16px;
  right: 50px;
  width: 40px;
  height: 35px;
}

.btn-item {
  top: 0;
  bottom: 0;
  margin: auto 0;
  transition: color 0.2s ease-out;
  display: none;
  position: absolute;
}

.list-group-item.editing .btn-editing{
  display: block;
  position: absolute;
  z-index: 9;
}
.list-group-item.editing .btn-exit {
  right: 0;
}
.list-group-item.editing .btn-save {
  right: 40px;
}
</style>
