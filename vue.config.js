module.exports = {
  "publicPath": process.env.NODE_ENV === 'production' ? '/uds-app-test/' : '/',
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.plugins
      .delete('split-manifest')
      .delete('inline-manifest')

    config.plugin('html').tap(args => {
      args[0].title = process.env.VUE_APP_TITLE
      return args
    })
  },
}