<template>
  <li @mouseover="btnShow = true" @mouseleave="btnShow = false" :class="{ active: btnShow }">
    <label>
      <input type="checkbox" :checked="item.done" @change="switchItem" />
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="btnShow" @click="dele">删除</button>
  </li>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      btnShow: false
    }
  },
  props: ['item', 'delTodo', 'switchTodo'],
  methods: {
    dele() {
      this.delTodo(this.item.id)
    },
    switchItem() {
      this.switchTodo(this.item.id)
    }
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.active {
  background-color: #ddd;
}
</style>
