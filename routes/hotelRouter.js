//This code was written by Ali Soufan.

const express = require("express");
const hotelRouter = express.Router();
const HotelModel = require("../model/HotelModel");

//Get All Route
hotelRouter.get("/", async (_req, res) => {
  try {
    const hotels = await HotelModel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete One Route`
hotelRouter.delete("/:id", async (req, res, next) => {
  HotelModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    hotelInfo
  ) {
    if (err) return next(err);
    res.json(hotelInfo);
  });
});

//Create One Route
hotelRouter.post("/", async (req, res) => {
  const hotel = new HotelModel({
    hotelname: req.body.hotelname,
    description: req.body.description,
    linkBook: req.body.linkBook,
    linkReview: req.body.linkReview,
    linkImage: req.body.linkImage,
    registerDate: req.body.registerDate,
  });
  try {
    const newHotel = await hotel.save();
    res.status(201).json({ newHotel });
  } catch (err) {
    res.status(400).json({ message: err.messsage });
  }
});

//Edit One Route PUT version
hotelRouter.put("/:id", async (req, res, next) => {
  HotelModel.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    hotelInfo
  ) {
    if (err) return next(err);
    res.json(hotelInfo);
  });
});

module.exports = hotelRouter;
