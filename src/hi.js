const bunyan = require('bunyan')
const log = bunyan.createLogger({name:'myapp',level:'info',src:true})

console.log('log.info() is:',log.info())
log.info('hi')

log.info('hi','trent')
log.info('hi %s there',true)
log.info({foo:'bar',multiline:'one\ntwo\nthree'},'hi %d',1,'two',3)