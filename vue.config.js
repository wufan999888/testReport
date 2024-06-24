const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {// 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      '/yesApi': {
        target: 'https://hd215.api.yesapi.cn', // 通过代理接口访问实际地址。这里是实际访问的地址。vue会通过代理服务器来代理请求
        changeOrigin: true,
        pathRewrite: {
          '^/yesApi': '' // 路径重写，移除路径中的/api
        }
      }
    }
  },

  publicPath: './'
})
