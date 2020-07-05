//This code was written by Lawrence Warren.

/** This router is used for:
 * Routing requests on the food page, which come in through /foodReq URLs
 * Routing requests on the CMS
 */
const express = require("express");
const FoodModel = require("../model/FoodModel");
const foodRouter = express.Router();

//Gets every element from the DB - FETCH
foodRouter.get("/", async (_req, res) => {
  try {
    const foodsReq = await FoodModel.find();
    res.json(foodsReq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete using /foodReq/id - DELETE
foodRouter.delete("/:id", function (req, res, next) {
  FoodModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    foodInfo
  ) {
    if (err) return next(err);
    res.json(foodInfo);
  });
});

//Post's a new food request to the db - ADD
foodRouter.post("/", async (req, res) => {
  const food = new FoodModel({
    image: req.body.image,
    name: req.body.name,
    address: req.body.address,
    type: req.body.type,
    price: req.body.price,
    link: req.body.link,
    registerDate: req.body.registerDate,
  });
  try {
    const newFood = await food.save();
    res.status(201).json({ newFood });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updates an existing field by it's _id - EDIT
foodRouter.put("/:id", function (req, res, next) {
  FoodModel.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    foodInfo
  ) {
    if (err) return next(err);
    res.json(foodInfo);
  });
});

module.exports = foodRouter;
