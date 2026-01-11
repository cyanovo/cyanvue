const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 1. 解决打包后白屏的核心配置：设置公共路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  
  // 2. 开发服务器配置：解决跨域问题（仅在 npm run serve 时生效）
  devServer: {
    proxy: {
      '/api': { // 代理所有以 /api 开头的请求
        target: 'http://localhost:8080', // 你的后端服务器地址
        changeOrigin: true, // 允许跨域
        // 如果你的后端接口没有 '/api' 前缀，可以重写路径
        // pathRewrite: { '^/api': '' }
      }
      // 你可以在这里配置多个代理规则
    }
  }
})