const mongoose = require("mongoose");
const Schema = mongoose.Schema;

charityInfo = new Schema({
    charityId:{
        type:BigInt,
        required: true
    },
    charity_name:{
        type:String,
        required: true
    },
    charity_phone:{
        type:String,
        required: true
    },
    charity_email:{
        type:String,
        required: true
    },
    charity_weblink:{
        type:String,
        required: true
    },
    charity_introduce:{
        type:Text,
        required: true
    }
});

//Create Model
const Charity = mongoose.model("charity",charityInfo);
module.exports = Charity;