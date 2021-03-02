<template>
  <div class="home-page text-center">
    <div class="mt-2">
      <h2 v-if="!isLogin">Home Page</h2>
      <h2 v-else>User Info</h2>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="isLogin">
      <table class="table table-bordered border-secondary">
        <thead>
          <tr>
            <th>Username</th>
            <th>AllTodo</th>
            <th>ActiveTodo</th>
            <th>CompletedTodo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-info">{{ getUsername }}</td>
            <td>{{ allTodo }}</td>
            <td>{{ activeTodo }}</td>
            <td>{{ completedTodo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allTodo: this.$store.state.todos.length,
      activeTodo: this.$store.getters.activeTodos.length,
      completedTodo: this.$store.getters.completedTodos.length,
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.loggedIn;
    },
    getUsername() {
      return localStorage.getItem("user_todo");
    },
  },
};
</script>

<style scoped></style>
