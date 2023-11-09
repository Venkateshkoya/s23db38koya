var shoe = require('../models/shoe');
// List of all shoes
exports.shoe_list = async function(req, res) {
    try{
        theshoe = await shoe.find();
        res.send(theshoe);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
  // res.send('NOT IMPLEMENTED: shoe list');
};
// for a specific shoe.
exports.shoe_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: shoe detail: ' + req.params.id);
};
// Handle shoes create on POST.
exports.shoe_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: shoe create POST');
};
// Handle shoes delete form on DELETE.
exports.shoe_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
};
// Handle shoes update form on PUT.
exports.shoe_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: shoe update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function(req, res) {
 try{
 theshoe = await shoe.find();
 res.render('costumes', { title: 'shoe Search Results', results: theshoe });
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};
