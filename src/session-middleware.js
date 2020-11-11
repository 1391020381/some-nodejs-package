
const session = require('./session')
const uuid = require('uuid')
module.exports = function createRequestId (req,res,next){
    const requestId = req.get['x-request-id'] || uuid.v1()
   session.set('requestId',requestId)
    next()
}