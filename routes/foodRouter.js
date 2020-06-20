//This code was written by Lawrence Warren.

/** This router is used for:
 * Routing requests on the food page, which come in through /foodReq URLs
 * Routing requests on the CMS
 */
const express = require("express");
const FoodModel = require("../model/FoodModel");
const foodRouter = express.Router();

//Gets every element from the DB
foodRouter.get("/", async (_req, res) => {
  try {
    const foodsReq = await FoodModel.find();
    res.json(foodsReq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete using /foodReq/id
foodRouter.delete("/:id", function (req, res, next) {
  FoodModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    foodInfo
  ) {
    if (err) return next(err);
    res.json(foodInfo);
  });
});

//Post's a new food request to the db
foodRouter.post("/", async (req, res) => {
  const food = new FoodModel({
    image: req.body.image,
    name: req.body.name,
    address: req.body.address,
    type: req.body.type,
    price: req.body.price,
    link: req.body.link,
  });
  try {
    const newFood = await food.save();
    res.status(201).json({ newFood });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updates an existing field by it's _id - https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/
foodRouter.put("/:id", function (req, res, next) {
  FoodModel.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    foodInfo
  ) {
    if (err) return next(err);
    res.json(foodInfo);
  });
});

//!These routes are currently unneeded. will be needed for CMS!

//Get One Route
foodRouter.get("/:name", getFood, (_req, res) => {
  res.json(res.food);
});

//Edit One Route PATCH version
foodRouter.patch("/:id", getFood, async (req, res) => {
  if (req.body.image != null) {
    res.food.image = req.body.image;
  }
  if (req.body.name != null) {
    res.food.name = req.body.name;
  }
  if (req.body.address != null) {
    res.food.address = req.body.address;
  }
  if (req.body.type != null) {
    res.food.type = req.body.type;
  }
  if (req.body.price != null) {
    res.food.price = req.body.price;
  }
  if (req.body.link != null) {
    res.food.link = req.body.link;
  }
  try {
    const updatedFood = await res.food.save();
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//getFood MIDDLEWARE
async function getFood(req, res, next) {
  let food;
  try {
    food = await FoodModel.find({ name: req.params.name });
    if (food == null) {
      return res.status(404).json({ message: "Cannot find food" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.food = food;
  next();
}

module.exports = foodRouter;
