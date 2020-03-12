const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  link: { type: String, required: true }
});

const Food = mongoose.model("food", foodSchema, "foods");

module.exports = Food;
