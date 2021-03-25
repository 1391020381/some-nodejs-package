const fs = require('fs')
const path = require('path')
setTimeout(() => {
    console.log(1)
}, 0)

setImmediate(() => {
    console.log('setImmediate 1')
})
console.log('process.cwd():', process.cwd())
console.log('__dirname:', __dirname)
console.log('path:', path.join(__dirname, './test.text'))
fs.readFile(path.join(__dirname, './test.text'), { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err
    console.log('read file success')
})

Promise.resolve().then(() => {
    console.log('poll callback')
})

console.log('2')