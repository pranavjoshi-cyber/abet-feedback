const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Location  = new Schema({
 location : {
    type: String ,
    required: true
  },
  branch_location:{
    type:String, 
    required:true 
  }
});

module.exports = mongoose.model("Location", Location);