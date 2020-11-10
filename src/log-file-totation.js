const express = require('express')
const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
const app = express()
const accessLogStream = rfs.createStream('access.log',{
    interval:'1d',
    path:path.join(__dirname,'../logs')
})

app.use(morgan('combined',{stream:accessLogStream}))
app.get('/',function(req,res){
    res.end('hello world mrogan rotation')
})

app.listen(3000,function(){
    console.log('servering is listening 3000 http:localhost:3000')
})