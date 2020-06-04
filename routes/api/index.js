const route = require('express').Router()

route.use('/users',require('./users'))
route.use('/products',require('./products'))

expors =  module.exports ={
    route
}