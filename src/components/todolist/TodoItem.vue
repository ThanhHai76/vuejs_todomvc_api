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
      <button class="destroy" @click="destroy()"></button>
    </div>
    <input
      class="edit form-control"
      @keyup.escape="cancelEditing()"
      @keyup.enter="finishEditing()"
      @blur="finishEditing()"
      v-model.trim="todo.content"
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
        return this.todo.status === "completed";
      },
      set(value) {
        if (value) {
          this.todo.status = "completed";
        } else {
          this.todo.status = "active";
        }
      },
    },
  },
  methods: {
    startEditing() {
      this.editingTodo = true;
      this.beforeEditCache = this.todo.content;
    },
    finishEditing() {
      if (this.todo.content === "") {
        this.todo.content = this.beforeEditCache;
      } else {
        this.updateTodo();
      }
      this.editingTodo = false;
    },
    cancelEditing() {
      this.editingTodo = false;
      this.todo.content = this.beforeEditCache;
    },
    updateTodo() {
      this.$store.dispatch("updateTodo", this.todo);
    },
    destroy() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
  },
};
</script>

<style scoped></style>
