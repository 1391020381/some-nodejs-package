const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const app = express()

const accessLogStream = fs.createWriteStream(path.join(__dirname,'../logs/access.log'),{flags:'a'})

app.use(morgan('combined',{stream:accessLogStream}))
app.get('/',function(req,res){
    res.end('hello world!')
})
app.listen(3000,function(){
    console.log('server is listening 3000')
})