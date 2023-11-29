var express = require('express');
const shoe_controllers= require('../controllers/shoe');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET shoes */
router.get('/', shoe_controllers.shoe_view_all_Page );
router.get('/detail', shoe_controllers.shoe_view_one_Page);
router.get('/create', secured, shoe_controllers.shoe_create_Page);
router.get('/update', secured,shoe_controllers.shoe_update_Page);
router.get('/delete', secured,shoe_controllers.shoe_delete_Page);
module.exports = router;


