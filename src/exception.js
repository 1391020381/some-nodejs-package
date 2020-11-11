const path = require('path')
const winston = require('winston')
const { transports } = require('winston')
require('winston-daily-rotate-file')
const logger = winston.createLogger({
    format:winston.format.simple(),
    transports:[
        new winston.transports.Console({
            handleExceptions:true
        })
        
    ],
    exceptionHandlers:[
        new transports.File({
            filename:path.join(__dirname,'../logs/exceptions.log')
        }),
        new transports.DailyRotateFile({
            filename: path.join(__dirname,"../logs/exceptionhandle-%DATE%.log"),
            datePattern:'YYYY-MM-DD-HH',
            zippedArchive:true,
            maxSize:'20m',
            maxFiles:'14d',
            level:'error'
        })
    ]
})
