const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
feedbackInfo = new Schema({
    experience:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required: false
    },
    email:{
        type: String,
        required: true
    },

});

//Create Model
//"User" is corresspond to the collection name in database for Users
const Feedback = mongoose.model("feedbackInfo", feedbackInfo);
module.exports = Feedback;