const { createLogger,format,transports } = require('winston')
const { combine,errors,json} = format
const path = require('path')
const logger = createLogger({
    format:combine(
        errors({stack:true}),
        json()
    ),
    transports:[
        new transports.Console(),
        new transports.File({
            filename:path.join(__dirname,'../logs/quick-start-error-1.log'),
            level:'error'
        })
    ]
})
logger.warn(new Error('Error passed as info'));
logger.log('error', new Error('Error passed as message'));

logger.warn('Maybe important error: ', new Error('Error passed as meta'));
logger.log('error', 'Important error: ', new Error('Error passed as meta'));

logger.error(new Error('Error as info'));
