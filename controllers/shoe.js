var shoe = require('../models/shoe');
// List of all shoes
exports.shoe_list = async function (req, res) {
    try {
        theshoe = await shoe.find();
        res.send(theshoe);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    // res.send('NOT IMPLEMENTED: shoe list');
};
// for a specific shoe.
exports.shoe_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await shoe.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle shoe create on POST.
exports.shoe_create_post = async function (req, res) {
    console.log(req.body)
    let document = new shoe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"shoe_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.color = req.body.color;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// Handle shoes delete form on DELETE.
//exports.shoe_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
//};
// Handle shoes delete form on DELETE.
exports.shoe_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await shoe.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle shoes update form on PUT.
exports.shoe_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await shoe.findById(req.params.id)
        // Do updates of properties
        if (req.body.brand) toUpdate.brand = req.body.brand;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
};

// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function (req, res) {
    try {
        theshoe = await shoe.find();
        res.render('shoe', { title: 'shoe Search Results', results: theshoe });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.shoe_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await shoe.findById(req.query.id)
        res.render('shoedetail',
            { title: 'shoe Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.shoe_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('shoecreate', { title: 'shoe Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.shoe_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await shoe.findById(req.query.id)
    res.render('shoeupdate', { title: 'shoe Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

exports.shoe_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await shoe.findById(req.query.id)
    res.render('shoedelete', { title: 'shoe Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };