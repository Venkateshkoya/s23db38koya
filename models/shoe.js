const mongoose = require("mongoose");

const shoeSchema = mongoose.Schema({
  brand: {
    type: String,
    required: [true, "Brand is required"],
    minlength: [4, "Brand should be at least 4 characters long"],
    maxlength: [8, "Brand less than 8 characters long"]
  },
  color: {
    type: String,
    required: [true, "Color is required"],
    minlength: [4, "Color should be at least 4 characters long"],
    maxlength: [9, "Brand less than 9 characters long"]
  },
  size: {
    type: Number,
    min: [5, "Size must be at least 5"],
    max: [20, "Size cannot be greater than 20"]
  }
});

module.exports = mongoose.model("shoe", shoeSchema);
