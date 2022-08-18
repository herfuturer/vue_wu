<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="switchAll" />
    </label>
    <span> <span>已完成{{this.hasDone}}</span> / 全部{{ $store.state.todos.length }} </span>
    <button class="btn btn-danger" @click="delDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: '',
  computed: {
    hasDone() {
      return this.$store.state.todos.filter(item => item.done).length
    }
  },
  methods: {
    delDone() {
      this.$store.commit('delAllDone')
    },
    switchAll(e){
      this.$store.commit('switchTodos', e.target.checked)
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  width: 575px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
