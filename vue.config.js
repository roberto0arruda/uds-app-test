module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/uds-app-test/'
        : '/',
    chainWebpack: config => {
        config.plugins
            .delete('split-manifest')
            .delete('inline-manifest')
    }
}