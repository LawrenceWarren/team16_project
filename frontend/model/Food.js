const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const foodSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  link: {
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
//"Food" is correspond to the collection name in database for foods
const Food = mongoose.model("food", foodSchema);
module.exports = Food;
