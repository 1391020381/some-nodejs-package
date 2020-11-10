const finalhandler = require('finalhandler')
const http = require('http')
const morgan = require('morgan')

const logger = morgan('combined')
const server = http.createServer((req,res)=>{
    const done = finalhandler(req,res)
    logger(req,res,function(err){
        if(err) return done(err)
        res.setHeader('content-type','text/plain')
        res.end('hello,world')
    })
})

server.listen(3000,function(req,res){
    console.log('servering is listending 3000')
})