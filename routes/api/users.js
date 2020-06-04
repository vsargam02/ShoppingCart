const User = require('../../db').User
const route = require('express').Router()

route.get('/',(req,res)=>{
    //we want to send an array of all users
    //from our database here

    User.findAll()
        .then((users)=>{
            res.status(200).send(users)

        })
        .catch((err)=>{
            res.status(500).send({
                error:'could not retrieve users'
            })
        })

})

route.post('/',(req,res)=>{
    //we expect the req to have name in it
    //we will create a new user

    User.create({    //it takes new user object,no need to id provided it will auto incremented 
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:'could not add new user'
        })
    })

})

exports = module.exports = route