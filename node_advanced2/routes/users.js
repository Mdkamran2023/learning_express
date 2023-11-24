// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/node_advanced2");

const userSchema=mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: { Array, default: [] },
  // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  datecreated: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("user",userSchema);
