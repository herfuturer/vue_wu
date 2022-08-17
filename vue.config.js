const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,  //代表自动打开你的浏览器
    host:'127.0.0.1',
    port:8080
  },
  lintOnSave:false  //忽略整个项目种eslint语法检查
})
