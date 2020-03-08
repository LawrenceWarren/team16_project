const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
userInfo = new Schema({
    hotelname:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    linkBook:{
        type:String,
        required: true
    },
    linkReview:{
        type:String,
        required: true
    }
});

//Create Model
//"User" is corresspond to the collection name in database for Users
const User = mongoose.model("user", userInfo);
module.exports = User;
