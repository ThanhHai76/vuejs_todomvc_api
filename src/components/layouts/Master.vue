<template>
  <div class="container col-md-6">
    <ul class="nav justify-content-center">
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
      <li class="nav-item" @click="logout()" v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Master',
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login' })
    }
  },
};
</script>

<style scoped>
.router-link-exact-active{
  background-color: white;
  border: 1px solid rgba(175, 47, 47, 0.2);
}
</style>
