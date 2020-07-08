module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/uds-app-test/'
        : '/'
}