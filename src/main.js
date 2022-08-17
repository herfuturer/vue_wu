import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    // console.log(this); this 是 vm
    this.__proto__.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
