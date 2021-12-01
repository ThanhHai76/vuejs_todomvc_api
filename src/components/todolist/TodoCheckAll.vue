<template>
  <div class="form-check d-flex align-self-center">
    <input
      class="check-box"
      type="checkbox"
      :checked="isCheckAll"
      @change="checkAll"
      v-show="getTodos.length"
    />
    <label for="check-box"></label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoCheckAll',
  data() {
    return {
      status: 'active'
    }
  },
  computed: {
    ...mapGetters(['getTodos', 'isCheckAll'])
  },
  methods: {
    checkAll(event) {
      const checked = event.target.checked
      checked ? this.status = 'completed' : this.status = 'active'
      this.getTodos.forEach((todo) => {
        this.$store.dispatch('updateTodo', {
          id: todo.id,
          content: todo.content,
          status: this.status
        })
      });
    },
  },
}
</script>
