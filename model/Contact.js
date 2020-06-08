//This code was written by Yutian Chen, and modified by Wenzheng Shan.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
contactInfo = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//Create Model
//"User" is corresspond to the collection name in database for Users
const Contact = mongoose.model("contactInfo", contactInfo);
module.exports = Contact;
