const bunyan = require('bunyan')
const log = bunyan.createLogger({name:'myapp'})
log.info('hi')