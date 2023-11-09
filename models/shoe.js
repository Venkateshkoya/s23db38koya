const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
brand: String,
color: String,
size: Number
})
module.exports = mongoose.model("shoes", shoeSchema)