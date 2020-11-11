const path = require('path')
const { createLogger,format,transports, level,  } = require("winston")
require('winston-daily-rotate-file')

const logger  = createLogger({
    level:'info',
    exitOnError:false,
    format:format.combine(
        format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack:true}),
        format.splat(),
        format.json()
    ),
    defaultMeta:{
        service:'simple-winston'
    },
    transports:[
        new transports.DailyRotateFile({
            filename: path.join(__dirname,"../logs/application-error-%DATE%.log"),
            datePattern:'YYYY-MM-DD-HH',
            zippedArchive:true,
            maxSize:'20m',
            maxFiles:'14d',
            level:'error'
        }),
        new transports.DailyRotateFile({
            filename: path.join(__dirname,"../logs/application-%DATE%.log"),
            datePattern:'YYYY-MM-DD-HH',
            zippedArchive:true,
            maxSize:'20m',
            maxFiles:'14d'
        })
    ],
    exceptionHandlers:[
        new transports.DailyRotateFile({
            filename: path.join(__dirname,"../logs/exceptionhandle-%DATE%.log"),
            datePattern:'YYYY-MM-DD-HH',
            zippedArchive:true,
            maxSize:'20m',
            maxFiles:'14d',
            level:'error'
        })
    ],
    rejectionHandlers:[
        new transports.DailyRotateFile({
            filename: path.join(__dirname,"../logs/application-rejectionpromsie-%DATE%.log"),
            datePattern:'YYYY-MM-DD-HH',
            zippedArchive:true,
            maxSize:'20m',
            maxFiles:'14d',
            level:'error'
        })
    ]
})
module.exports = logger
