const bunyan = require('bunyan')
<<<<<<< HEAD
const log = bunyan.createLogger({name:'myapp',level:'info',src:true})

console.log('log.info() is:',log.info())
log.info('hi')

log.info('hi','trent')
log.info('hi %s there',true)
log.info({foo:'bar',multiline:'one\ntwo\nthree'},'hi %d',1,'two',3)
=======
const log = bunyan.createLogger({name:'myapp'})
log.info('hi')
>>>>>>> 2bcad13c0a2897a7b86b56523a0492dfd90e3b2a
