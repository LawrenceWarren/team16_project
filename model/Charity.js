//This code was written by Ben Smith.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
charityInfo = new Schema({
  charityId: {
    type: Number,
    required: true,
  },
  charity_name: {
    type: String,
    required: true,
  },
  charity_phone: {
    type: String,
    required: true,
  },
  charity_email: {
    type: String,
    required: true,
  },
  charity_weblink: {
    type: String,
    required: true,
  },
  charity_introduce: {
    type: String,
    required: true,
  },
  charity_image: {
    type: String,
    required: true,
  },
});

//Create Model
const Charity = mongoose.model("charity", charityInfo);
module.exports = Charity;
