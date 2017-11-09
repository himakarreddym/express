const mongoose = require('mongoose');
var Contactschema = mongoose.Schema({
    first_name: { type: String,required:true },
    last_name: { type: String,required:true},
    phone:{type:Number,required:true}
  });

  var Contact = module.exports = mongoose.model('Contact',Contactschema); 