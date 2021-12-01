<template>
  <footer class="footer">
    <transition name="fade">
      <button
        class="clear-completed"
        @click="deleteTodoChecked()"
        v-show="checkedTodo.length"
      >
      Delete checked
      </button>
    </transition>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoFooter',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['checkedTodo'])
  },
  methods: {
    deleteTodoChecked() {
      this.checkedTodo.forEach(todo => {
        this.$store.dispatch('deleteTodo', todo)
      });
    },
  },
}
</script>
