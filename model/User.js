//This code was written by Wenzheng Shan.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const userInfo = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

//Create Model
//"User" is correspond to the collection name in database for Users
const User = mongoose.model("user", userInfo);
module.exports = User;
