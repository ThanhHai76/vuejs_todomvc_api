<template>
  <div>
    <h2 class="mt-2">Register</h2>
    <div
      v-if="errorMsg"
      class="alert alert-danger"
    >
      {{errorMsg}}
    </div>
    <form class="form-group" action="#" @submit.prevent="validateRegister">
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-user"></i></span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          class="form-control"
          v-model="username"
          v-validate="'required|min:3'"
          spellcheck="false"
          required
        />
        <span v-show="errors.has('username')" class="form-error">{{ errors.first('username') }}</span>
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
        <span v-show="errors.has('password')" class="form-error">{{ errors.first('password') }}</span>
      </div>

      <div>
        <button :disabled="errors.any()" type="submit" class="btn btn-success">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMsg: '',
    }
  },
  methods: {
    async validateRegister(){
      const result = await this.$validator.validateAll()
      if(result){
        this.register();
      }
    },
    async register() {
      try {
        const response = await this.$store.dispatch('register', {
          name: this.username,
          password: this.password,
        })
        const message = 'You have successfully registered. You can login hear !'
        this.$router.push({ 
          name: 'login',
          params: { dataSuccessMsg: message } 
        })
      } catch (error) {
        this.errorMsg = error.response.data.message
      }
    },
  },
}
</script>

<style scoped></style>
