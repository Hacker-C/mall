module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        common: '@/common',
        apis: '@/apis',
        views: '@/views'
      }
    }
  }
}
