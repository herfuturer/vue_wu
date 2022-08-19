const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer对开发服务器进行配置  就是和你一条心得那个代理服务器
  devServer:{
    open:true,  //代表自动打开你的浏览器
    host:'127.0.0.1',
    port:8080,
    // 配置代理得第一种方式: 有局限性 因为不管之后请求哪台服务器 都会去找5000这个服务器
    // proxy: 'http://127.0.0.1:5000',//真正要请求得有数据得那台服务器地址
    // 配置代理得第二种方式: 灵活起来了 根据不同得请求前缀决定去访问哪台真正有数据得服务器
    proxy: {
      "/api": { //路径(请求)前缀  在于让代理服务转发请求时去访问5000这个真正有数据得服务器
        target: "http://127.0.0.1:5000", //咱的是127.0.0.1 
        pathRewrite: {"^/api" : ""}
      },
      "/tom": { //路径(请求)前缀  在于让代理服务转发请求时去访问5001这个真正有数据得服务器
        target: "http://127.0.0.1:5001", //咱的是127.0.0.1 
        pathRewrite: {"^/tom" : ""}
      },

    }
  },
  lintOnSave:false  //忽略整个项目种eslint语法检查
})
