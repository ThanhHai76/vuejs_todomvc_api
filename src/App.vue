<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
      crossorigin="anonymous"
    />
    <master></master>
    <div v-if="loading" class="loading">
      <scale-loader></scale-loader>
    </div>
  </div>
</template>

<script>
import Master from './components/layouts/Master.vue'
import ScaleLoader from './components/layouts/ScaleLoader.vue'
import './assets/app.js'

export default {
  data(){
    return {}
  },
  name: 'App',
  computed: {
    loading(){
      return this.$store.state.loading
    }
  },
  components: {
    Master,
    ScaleLoader
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4d4d4d;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.4em;
  background: #f5f5f5;
  font-weight: 300;
}
</style>
