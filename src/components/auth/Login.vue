<template>
  <div>
    <h2 class="mt-2">Login</h2>
    <div v-if="successMsg" class="alert alert-success">{{ successMsg }}</div>
    <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
    <form
      class="form-group"
      action="#"
      @submit.prevent="validateLogin"
    >
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-user"></i></span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          class="form-control"
          v-model="username"
          v-validate="'required|min:3'"
          required
        />
        <span v-if="errors.has('username')" class="form-error">{{ errors.first('username') }}</span>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-key"></i></span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
          v-validate="'required|min:8'"
          required
        />
         <span v-if="errors.has('password')" class="form-error">{{ errors.first('password') }}</span>
      </div>

      <div>
        <button type="submit" class="btn btn-success">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    dataSuccessMsg: {
      type: String
    }
  },
  data() {
    return {
      username: '',
      password: '',
      successMsg: this.dataSuccessMsg,
      errorMsg: ''
    }
  },
  methods: {
    validateLogin(){
      this.$validator.validateAll().then((result) => {
        if(result){
          this.login();
        }
      })
    },
    login() {
      this.$store.commit('loading')
      this.$store
        .dispatch('login', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'todo'})
        })
        .catch((error) => {
          this.errorMsg = error.response.data.message;
          this.username = '',
          this.password = ''
        })
    },
  },
}
</script>

<style scoped></style>
