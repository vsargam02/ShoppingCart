const Product = require('../../db').Product
const route = require('express').Router();

route.get('/',(req,res)=>{
    //get all products
    Product.findAll()
    .then((product)=>{
        res.status(200).send(product)
    })
    .catch((err)=>{
        res.status(500).send({
            error: 'could not retirve products'
        })
    })
})
route.post('/',(req,res)=>{
    //validate the values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:'price is not valid number'
        })
    }
    //add a new product
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((error)=>{
        res.status(501).send({
            error:'error adding product'
        })
    })
})

exports = module.exports=route