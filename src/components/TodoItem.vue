<template>
  <li @mouseover="btnShow=true" @mouseleave="btnShow=false" :class="{bgc: btnShow}">
    <label>
      <input type="checkbox" :checked="item.done" @change="swit" />
      <span>{{item.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="btnShow" @click="del">删除</button>
  </li>
</template>

<script>
export default {
  name: '',
  props: ['item'],
  data(){
    return {
      btnShow: false
    }
  },
  methods: {
    del(){
      this.$store.commit('delTodo', this.item.id)
    },
    swit(){
      this.$store.commit('changeItem',this.item.id)
    }
  }
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

.bgc{
  background-color: #eee;
}
</style>
