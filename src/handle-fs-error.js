const fs = require('fs')
const path = require('path')
const bunyan = require('bunyan')

const FILENAME = 'handle-fs-error.log'

const S_IWUSR = 00200

console.warn('-log file is "%s".',FILENAME)

if(!fs.existsSync(FILENAME)){
     console.log('- Touch log file.')
     fs.writeFileSync(FILENAME,'touch\n')
}

if(fs.statSync(FILENAME).mode&S_IWUSR){
    console.warn('- Make log file read-only.')
    fs.chmodSync(FILENAME,0444)
}
console.log('- Create logger')

const log = bunyan.createLogger({
    name:'handle-fs-error',
    stream:[
        { path:FILENAME}
    ]
})