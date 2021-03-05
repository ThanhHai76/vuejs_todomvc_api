<template>
  <div class="container col-md-6">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item" v-if="loggedIn">
        <router-link :to="{ name: 'todo'}"
          >App</router-link
        >
      </li>
      <li class="nav-item" v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li class="nav-item" v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Register</router-link>
      </li>
      <li class="nav-item" v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style scoped>
.router-link-exact-active{
  background-color: white;
  border: 1px solid rgba(175, 47, 47, 0.2);
}
</style>
