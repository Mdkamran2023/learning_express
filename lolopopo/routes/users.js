// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose=require('mongoose');
// this will crete db sheriyans_revision
mongoose.connect("mongodb://127.0.0.1:27017/sheriyans_revision");

//schema :-- (documents data  look like)
//logical and physical view
 const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number,
});

//this will make collection here "Users"
 module.exports=mongoose.model("user",userschema);


