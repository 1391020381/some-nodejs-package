const fs = require('fs')
const { resolve } = require("path")
const dotenv = require('dotenv')

const dotenvTags = [
    'development',
    'test',
    'production'
]


if(!dotenvTags.includes(process.env.NODE_ENV)){
     process.env.NODE_ENV = dotenvTags[0]
}
const dotenvPath = resolve('.env')

console.log('dotenvPath:',dotenvPath)

// fs.existsSync(path)   如果路径存在 则返回 true  否则返回 fasle

const dotenvFiles = [
    dotenvPath,
    `${dotenvPath}.local`,
    `${dotenvPath}.${process.env.NODE_ENV}`,
    `${dotenvPath}.${process.env.NODE_ENV}.local`
].filter(fs.existsSync)

console.log(dotenvFiles)

dotenvFiles.reverse().forEach(dotenvFile=> {
    return dotenv.config({path:dotenvFile})
})