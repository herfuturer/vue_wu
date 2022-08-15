<template>
  <div ref="box">
    ggo
    <button @click="show">获取内容</button>
  </div>
</template>

<script>
export default {
  name: 'vue2',
  data(){
    return {
      msg: 'ggo'
    }
  },
  methods:{
    show(){
      console.log(this);
      console.log(this.$refs.box);
    }
  }
}
</script>

<style scoped>

</style>
