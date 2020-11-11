const path = require('path')

const winston = require('winston')
require('winston-daily-rotate-file')

const transportError = new winston.transports.DailyRotateFile({
    filename: path.join(__dirname,"../logs/application-error-%DATE%.log"),
    datePattern:'YYYY-MM-DD-HH',
    zippedArchive:true,
    maxSize:'20m',
    maxFiles:'14d',
    level:'error'
})

const transportInfo = new winston.transports.DailyRotateFile({
    filename: path.join(__dirname,"../logs/application-info-%DATE%.log"),
    datePattern:'YYYY-MM-DD-HH',
    zippedArchive:true,
    maxSize:'20m',
    maxFiles:'14d',
    level:'info'
})


const logger = winston.createLogger({
    transports:[
        transportError,
        transportInfo
    ]
})
logger.info('hello world winston-daily-rotate-file')
logger.error('hello world winston-daily-rotate-file')