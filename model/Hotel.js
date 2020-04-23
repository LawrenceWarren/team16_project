//This code was written by Ali Soufan.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
hotelInfo = new Schema({
  hotelname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkBook: {
    type: String,
    required: true,
  },
  linkReview: {
    type: String,
    required: true,
  },
  linkImage: {
    type: String,
    required: true,
  },
});

//Create Model
//"Hotel" is corresspond to the collection name in database for Hotels
const Hotel = mongoose.model("hotel", hotelInfo);
module.exports = Hotel;
