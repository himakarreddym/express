const express = require('express');
const Product = require('../model/product')
const router = express.Router();

router.get('/products',(req,res,next)=>{
    Product.find((err,products)=>{
        res.json(products);
    })
}) 

router.get('/products/:id',(req,res,next)=>{
    Product.findOne({id:req.params.id},(err,products)=>{
        res.json(products);
    })
}) 
router.put('/product/save',(req,res,next)=>{
    var newContact = new Product({
             id:req.body.id, 
             name:req.body.name,
             current_price:{
                value : req.body.current_price.value,
                currency_code: req.body.current_price.currency_code 
             }
    })
    newContact.save((err,product) => {
        if(err){
            res.json({msg:'Unable to add new product'});
        }
        else{
            res.json({msg:'Product added sucessfully'}); 
        }
    })
}) 

module.exports = router;