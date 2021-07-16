const UploadSourceMapWebpackPlugin = require('./plugin/uploadSourceMapWebPackPlugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    productionSourceMap: true,
    configureWebpack: {
        devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : 'source-map',
        plugins: [
            new CleanWebpackPlugin(),
            new UploadSourceMapWebpackPlugin({
                uploadUrl: 'http://localhost:7001/monitor/sourcemap',
                apiKey: 'kaikeba'
            })
        ]
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: false
}
