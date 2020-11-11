const express = require('express')
const util = require('util')
const fs = require('fs')
const readFile = util.promisify(fs.readFile)
const logger = require("./simple-winston.js")

const app = express()

app.use(function(req,res,next){
    logger.info(req.url)
    next()
})
app.use('/',function(req,res){
    // setTimeout(function(){
    //     console.log(mmmmmmmmmmmmmmmmmmmmmmmmmmm)
    // })
    readFile('./xxxxxxxxxxxxxxxx').then(data=>{
        console.log(data)
    })
    res.end('hello world express!!')
})

app.use(function(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }

    logger.error(err);
})
process.on('uncaughtException',(err)=>{
    logger.error(err)
    process.exit(1)
})

app.listen(3000,()=>{
    console.log('servering is listening http//:localhost:3000 ')
})