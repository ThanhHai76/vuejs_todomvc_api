<template>
  <div class="container text-center">
    <h2 class="login-heading">Home Page</h2>
    <img alt="Vue logo" src="../../assets/logo.png">
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('clearTodos')
    this.$store.dispatch('destroyToken').then(() => {
      this.$router.push({ name: 'home' }).catch(()=>{})
    })
  },
}
</script>

<style scoped></style>
