const path = require('path')
const { createLogger,format,transports } = require('winston');
const logger = createLogger({
    level:'info',
    format:format.combine(
        format.colorize({ all: true }),
        format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({
            stack:true
        }),
        format.splat(),
        format.json()
    ),
    defaultMeta:{
        service:'your-service-name'
    },
    transports:[
        new transports.File({
            filename:path.join(__dirname,'/logs/quick-start-error.log'),
            level:'error'
        }),
        new transports.File({
            filename:path.join(__dirname,'/logs/quick-start-combined.log')
        })
    ]
})

if(process.env.NODE_ENV !=='prod'){
    logger.add(new transports.Console({
        format:format.combine(
            format.colorize(),
            format.simple()
        )
    }))
}

logger.info('winston logger')
logger.warn(new Error('Error passed as info'));
logger.log('error', new Error('Error passed as message'));

logger.warn('Maybe important error: ', new Error('Error passed as meta'));
logger.log('error', 'Important error: ', new Error('Error passed as meta'));

logger.error(new Error('Error as info'));