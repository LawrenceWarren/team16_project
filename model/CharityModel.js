const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
charityInfo = new Schema({
  charity_name: {
    type: String,
    required: true,
  },
  charity_weblink: {
    type: String,
    required: true,
  },
  charity_image: {
    type: String,
    required: true,
  },
  registerDate: {
    type: String,
    required: true,
  },
});

//Create Model
const Charity = mongoose.model("charity", charityInfo);
module.exports = Charity;
