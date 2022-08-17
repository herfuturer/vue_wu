<template>
  <div class="footer">
    <h1>重大新闻,某尚硅谷男老师，光天化日 竟做出如此之事...</h1>
    <button @click="sendMsg">点击把msg发送给Header</button>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data(){
    return {
      msg: '课间跳起鸡你太美'
    }
  },
  methods:{
    sendMsg(){
      this.$emit('msg', this.msg)
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: rgb(18, 247, 247);
  padding: 20px;
  margin-top: 10px;
}
</style>
