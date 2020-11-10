const path = require('path')
const { transports } = require('winston')
const winston = require('winston')
const logger = winston.createLogger({
    format:winston.format.simple(),
    transports:[
        // new winston.transports.Console({
        //     handleExceptions:true
        // })
        
    ],
    exceptionHandlers:[
        new transports.File({
            filename:path.join(__dirname,'../logs/exceptions.log')
        })
    ]
})
console.log(xxxxxxx.a)
throw new Error('Hello winston!')