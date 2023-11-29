const mongoose = require("mongoose");

const shoeSchema = mongoose.Schema({
  brand: String,
  color: String,
  size: {
    type: Number,
    min: [5, "Size must be at least 5"],
    max: [20, "Size cannot be greater than 20"],
  
  }
});

module.exports = mongoose.model("shoe", shoeSchema);
