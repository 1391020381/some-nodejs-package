const glob = require('glob')
const path = require('path')
const fs = require('fs')
const http = require('http')
class UploadSourceMapWebpackPlugin {
    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        console.log('UploadSourceMapWebPackPlugin apply')
        // 打包结束后执行
        compiler.hooks.done.tap('upload-sourcemap-plugin', async status => {
            console.log('webpack runing')
            // 读取surcemap文件
            const list = glob.sync(path.join(status.compilation.outputOptions.path, `./**/*.{js.map,}`))
            console.log('list:', list)
            for (let filename of list) {
                await this.upload(this.options.uploadUrl, filename)
            }
        })
    }
    upload(url, file) {
        return new Promise(resolve => {
            console.log('upload Map:', file)
            const req = http.request(`${url}?name=${path.basename(file)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Connection': 'keep-alive',
                    'Transfer-Encoding': 'chunked'
                }
            })
            fs.createReadStream(file)
                .on('data', chunk => {
                    req.write(chunk)
                })
                .on('end', () => {
                    req.end()
                    resolve()
                })
        })
    }
}

module.exports = UploadSourceMapWebpackPlugin