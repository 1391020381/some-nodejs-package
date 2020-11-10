const express = require('express')
const morgan = require('morgan')
const uuid = require('node-uuid')
morgan.token('id',function getId(req){
    return req.id
})
const app = express()

app.use(assignId)
app.use(morgan(':id :method :url :response-time'))
app.get('/',function(req,res){
     res.end('hello world!')
})

app.listen(3000,function(){
    console.log('server is listening http//:localhost:3000')
})
function assignId(req,res,next){
    req.id =  uuid.v4()
    next()
}