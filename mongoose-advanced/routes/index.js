var express = require('express');
var router = express.Router();
var userModel=require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create_users", async (req, res) => {
  try {
    let userData = await userModel.create({
      username: "harshita",
      nickname: "harshitarani",
      description: "learning ",
      categories: ['fashion', 'react']
    });

    res.send(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/find",async (req,res)=>{
  // How can I perform a case-insensitive search in Mongoose?
  // searcj=hing in insensitive way
  //searching for for name that contains kamran
  // let regex=new RegExp("^KAMRAN$",'i');
  // let user=await userModel.find({username:regex})
  // res.send(user);


  //How do I find documents where an array field contains all of a set of values?
  // let user= await userModel.find({categories:{$all:['fashion','react']}});
  // res.send(user);

  // How can I search for documents with a specific date range in Mongoose?
  // var date1= new Date('2023-11-25');
  // var date2= new Date('2023-11-27');
  // let user=await userModel.find({datecreated:{$gte:date1,$lte:date2}});
  // res.send(user);

  //How can i filter documents based on the existence of a field in Mongoose?
  // let user=await userModel.find({categories:{$exists:true}});
  // res.send(user);

  //How can I filter documents based in a specific field's length in Mongoose?
  let user=await userModel.find({
    $expr:{
      $and:[
        {$gte:[{$strLenCP: '$nickname'},0]},
        {$lte:[{$strLenCP: '$nickname'},5]}
      ]
    }
  })
  res.send(user);
})

module.exports = router;
