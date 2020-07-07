//This code was written by Ben Smith.

const express = require("express");
const charityRouter = express.Router();
const CharityModel = require("../model/Charity");

//Get All Route
charityRouter.get("/", async (_req, res) => {
  try {
    const charities = await CharityModel.find();
    res.json(charities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete One Route
charityRouter.delete("/:id", async (_req, res, next) => {
  CharityModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    charityInfo
  ) {
    if (err) return next(err);
    res.json(charityInfo);
  });
});

//Create One Route
charityRouter.post("/", async (req, res) => {
  const charity = new CharityModel({
    charity_name: req.body.charity_name,
    charity_weblink: req.body.charity_weblink,
    charity_image: req.body.charity_image,
    registerDate: req.body.registerDate,
  });
  try {
    const newCharity = await charity.save();
    res.status(201).json({ newCharity });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit One Route PUT version
charityRouter.put("/:id", async (req, res) => {
  CharityModel.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    charityInfo
  ) {
    if (err) return next(err);
    res.json(charityInfo);
  });
});

module.exports = charityRouter;
