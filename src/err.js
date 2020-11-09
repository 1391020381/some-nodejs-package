const http = require('http')
const bunyan = require('bunyan')
const util = require('util')


const log = bunyan.createLogger({
    name:'myserver',
    serializers:{
       err:bunyan.stdSerializers.err
    }
})

try{
    throw new TypeError('boom')
}catch(err){
    log.warn({err:err},'operation went boom: %s',err)
}
log.info(new TypeError('how about this?'))

try{
  throw 'boom string'
}catch(err){
    log.error(err)
}