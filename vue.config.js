const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    scss: {
      additionalData: `@import "~@/assets/global.scss";`
    }
  }
})
