<template>
  <div>
    <h2 class="login-heading">Register</h2>
    <div
      :class="{
        'alert alert-success': response.username,
        'alert alert-danger': response.message,
      }"
      role="alert"
    >
      <div v-if="response.username">
        You have successfully registered
      </div>
      {{ response.message}}
    </div>
    <form class="form-group" action="#" @submit.prevent="register">
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-user"></i></span>
        <input
          type="text"
          name="name"
          placeholder="Username"
          class="form-control"
          v-model="name"
          required
        />
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
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-success">Create Account</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          password: this.password,
        })
        .then((response) => {
          this.$router.push({ name: "login" });
        });
    },
  },
  computed: {
    response() {
      return this.$store.state.response;
    },
  },
};
</script>

<style scoped></style>
