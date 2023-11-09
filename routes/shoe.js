var express = require('express');
const shoe_controllers= require('../controllers/shoe');
var router = express.Router();
/* GET shoes */
router.get('/', shoe_controllers.shoe_view_all_Page );
module.exports = router;
