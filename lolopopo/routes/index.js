var express = require('express');
var router = express.Router();
const userModel=require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create",async (req,res)=>{
  //asynchronous code---
  const createduser= await userModel.create({
    username:"kamran-takami",
    name:"kamran",
    age:24
  });
  res.send(createduser);

})

router.get("/read_users", async (req,res)=>{
  let allusers=await userModel.find();
  res.send(allusers);
})

module.exports = router;
