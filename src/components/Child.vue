<template>
  <div class="child">
    <h1>子组件</h1>
    <hr>
    <p>传递的消息:{{}}</p>
    <button @click="send">点击发送消息</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data(){
    return {

    }
  },
  methods:{
    send(){
      this.$emit('hehe', 11111)
    }
  }
}
</script>

<style scoped>
.child{
  background: skyblue;
  padding: 20px;
}
</style>
