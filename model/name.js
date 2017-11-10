const mongoose = require('mongoose');
var NameSchema = mongoose.Schema({
    id: { type: Number,required:true },
    name: { type: String,required:true}
  });

var Name = module.exports = mongoose.model('Name',NameSchema); 
  