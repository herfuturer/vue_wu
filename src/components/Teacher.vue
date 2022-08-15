<template>
  <div>
    <h1>teacher组件</h1>
    <p>车车🚗🚗:{{che.name}}</p>
    <p>数据: {{shuju}}</p>
    <p>da: {{da}}</p>
    <button @click="changeProp">改变prop</button>
  </div>
</template>

<script>
export default {
  name: 'gacher',
  data() {
    return {
      msg: 'teacher里面的数据'
    }
  },
  // props:['che','shuju'],
  props: {
    che:{
      type:Object,
      required:true
    },
    shuju:{
      type:String,
      required:true
    },
    da:{
      type:Number,
      default:1111,
    }
  },
  methods: {
    changeProp(){
      // this.che = {
      //   name: '奔驰',
      //   price: '998'
      // }
      console.log(this.che.name === '宝马' ? '奔驰' : '宝马');
      this.che.name = (this.che.name === '宝马' ? '奔驰' : '宝马')
    }
  }
}
</script>

<style>
</style>