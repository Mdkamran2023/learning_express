var express = require('express');
var router = express.Router();
const userModel=require('./users');
const cookieParser = require('cookie-parser');


// for cookies
router.get("/",(req,res)=>{
  //client side
  res.cookie("age",25);
  res.render('index', { title: 'Express' });
})

router.get("/read_cookies",(req,res)=>{
console.log(req.cookies);
res.send("check");
})

router.get("/delete_cookie",(req,res)=>{
  res.clearCookie("age");
  res.send("cookie cleared");
})



// for session
// router.get('/', function(req, res, next) {
//   req.session.ban=true;
//   console.log(req.session);
//   res.render('index', { title: 'Express' });
// });

router.get("/checkban",(req,res)=>{
  console.log(req.session);
  if(req.session.ban === true){
    res.send('u are banned');
  }
  res.send("not banned");
});

router.get("/removeban",function(req,res){
  req.session.destroy((err)=>{
    if(err) throw err;
    res.send("ban removed");
  })
})



// for mongoose
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

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

router.get("/delete",async (req,res)=>{
 let deletedUser=await userModel.findOneAndDelete({
  name:"aaloo"
 });
 res.send(deletedUser);
})

module.exports = router;






