const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend-service:8080',
        changeOrigin: true
      }
    }
  }
})
