var express = require('express');
var router = express.Router();
const userModel= require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed',(req,res)=>{
req.flash("age",12);
req.flash("name","kamran");
res.send("done");
});

router.get('/checkkaro',(req,res)=>{
 console.log( req.flash("age"),req.flash("name"));
 res.send("check out at terminal");
})

module.exports = router;
