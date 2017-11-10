const express = require('express');
const Name = require('../model/name')
const Product = require('../model/product')
const router = express.Router();

router.get('/products',(req,res,next)=>{
    Product.find((err,products)=>{
        res.json(products);
    })
}) 

router.get('/names',(req,res,next)=>{
    Name.find((err,names)=>{
        res.json(names);
    })
}) 

router.get('/products/:id',(req,res,next)=>{
    //call a funbction
    var returnName = new Name();
    Name.findOne({id:req.params.id}, (err,names)=> { 
        returnName =  names; 
    });
    Product.findOne({id:req.params.id},(err,products)=>{
        console.log(products);
        products.name = returnName.name;
        res.json(products);
    })
}) 

router.put('/product/:id',(req,res,next)=>{
    
    var newContact = new Product({
             id:req.body.id, 
             name:req.body.name,
             current_price:{
                value : req.body.current_price.value,
                currency_code: req.body.current_price.currency_code 
             }
    })
    Product.updateOne({
        "id": req.body.id
    }, {
        $set: {
            current_price:{
            value : 25.5,
            currency_code: 'INR'
         }
        }
    }, function(err, results) {
        res.json('Update Sucessful');
    });
}) 

module.exports = router;