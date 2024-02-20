const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id : {
    type: String ,
   
  },  
  email :{
    type: String ,
    
  },  
  password :{
    type: String ,
  
  },  
  name :{
    type: String ,
   
  },  
  country :{
    type: String ,
   
  },  
  phone :{
    type: String ,
 
  }
} , {collection : "Users"});

module.exports = mongoose.model('Users', usersSchema);