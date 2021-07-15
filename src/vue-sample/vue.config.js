module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'dev',
    configureWebpack: {
        devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : undefined,
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: false
}
