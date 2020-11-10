const path = require('path')
const { createLogger,format,transports, level } = require('winston')

const logger = createLogger({
    level:'info',
    format:format.combine(
        format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack:true}),
        format.splat(),
        format.json()
    ),
    defaultMeta:{
        service:'your-service-name'
    },
    transports:[
        new transports.File({
            filename:path.join(__dirname,'../logs/quick-start-error.log'),
            level:'error'
        }),
        new transports.File({ filename:path.join(__dirname,'../logs/quick-start-combined.log'),
        
    })
    ]
})
if(process.env.NODE_ENV!=='production'){
    logger.add(new transports.Console({
        format:format.combine(
            format.colorize(),
            format.simple()
        )
    }))
}

logger.log({
    level:'info',
    message:'Pass an object and this works',
    additional:'properties',
    are:'passed along'
})
logger.info({
    message:'Use a helper method if you want',
    additional:'properties',
    are:'passed along'
})
logger.log('info', 'Pass a message and this works', {
    additional: 'properties',
    are: 'passed along'
  });
  
  logger.info('Use a helper method if you want', {
    additional: 'properties',
    are: 'passed along'
  });
  logger.error(new Error('Error as info'));