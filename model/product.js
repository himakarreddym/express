const mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    id: { type: Number,required:true },
    name: { type: String,required:true},
    current_price:{
        value : {type:Number,required:true},
        currency_code : {type:String,required:true}
    }
  });

  var Product = module.exports = mongoose.model('Product',ProductSchema); 