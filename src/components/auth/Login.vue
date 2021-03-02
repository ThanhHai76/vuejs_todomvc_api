<template>
  <div>
    <h2 class="login-heading">Login</h2>
    <form
      class="form-group needs-validation"
      action="#"
      @submit.prevent="login"
    >
      <div class="input-group has-validation mb-3">
        <span class="input-group-text"><i class="fas fa-user"></i></span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          class="form-control"
          v-model="username"
          required
        />
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-key"></i></span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
          required
        />
        <div class="invalid-feedback">
          Please provide password.
        </div>
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-success">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$router.push({ name: "todo", params: {route: 'all'} });
        });
    },
  },
};
</script>

<style scoped></style>
