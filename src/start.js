const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))

app.get('/',function(req,res){
    res.end('hello morgan')
})
app.listen(3000,function(){
    console.log('server is listening 3000 http:127.0.0.1:3000')
})