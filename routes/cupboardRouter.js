//TODO: define cupboard route

//This code was written by Lawrence Warren.

/** This router is used for:
 * Routing requests on the food page, which come in through /foodReq URLs
 * Routing requests on the CMS
 */
const express = require("express");
const CupboardModel = require("../model/CupboardModel");
const cupboardRouter = express.Router();

//Gets every element from the DB - FETCH
cupboardRouter.get("/", async (_req, res) => {
  try {
    const foodsReq = await CupboardModel.find();
    res.json(foodsReq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete using /foodReq/id - DELETE
cupboardRouter.delete("/:id", async (req, res, next) => {
  CupboardModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    foodInfo
  ) {
    if (err) return next(err);
    res.json(foodInfo);
  });
});

//Post's a new food request to the db - ADD
cupboardRouter.post("/", async (req, res) => {
  const food = new CupboardModel({
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
cupboardRouter.put("/:id", async (req, res, next) => {
  CupboardModel.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    foodInfo
  ) {
    if (err) return next(err);
    res.json(foodInfo);
  });
});

module.exports = cupboardRouter;
