const express = require("express");
const hotelRouter = express.Router();
const Hotel = require("../model/Hotel");

//Get All Route
hotelRouter.get("/", async (_req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One Route
hotelRouter.get("/:hotelname", getHotel, (_req, res) => {
  res.json(res.hotel);
});

//Create One Route
hotelRouter.post("/", async (req, res) => {
  const hotel = new Hotel({
    hotelname: req.body.hotelname,
    description: req.body.description,
    linkBook: req.body.linkBook,
    linkReview: req.body.linkReview,
    linkImage: req.body.linkImage,
  });
  try {
    const newHotel = await hotel.save();
    res.status(201).json({ newHotel });
  } catch (err) {
    res.status(400).json({ message: err.messsage });
  }
});

//Edit One Route PUT version
hotelRouter.put("/:hotelname", getHotel, async (req, res) => {
  try {
    const updatedHotel = await res.hotel.set(req.body);
    res.json(updatedHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit One Route PATCH version
hotelRouter.patch("/:hotelname", getHotel, async (req, res) => {
  if (req.body.hotelname != null) {
    res.hotel.hotelname = req.body.hotelname;
  }
  if (req.body.description != null) {
    res.hotel.description = req.body.description;
  }
  if (req.body.linkBook != null) {
    res.hotel.linkBook = req.body.linkBook;
  }
  if (req.body.linkReview != null) {
    res.hotel.linkReview = req.body.linkReview;
  }
  if (req.body.linkImage != null) {
    res.hotel.linkImage = req.body.linkImage;
  }
  try {
    const updatedHotel = await res.hotel.save();
    res.json(updatedHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete One Route
hotelRouter.delete("/:hotelname", getHotel, async (_req, res) => {
  try {
    await res.hotel.deleteOne();
    res.json({ message: "Hotel has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getHotel MIDDLEWARE
async function getHotel(req, res, next) {
  let hotel;
  try {
    hotel = await Hotel.findById(req.params.hotelname);
    if (hotel == null) {
      return res.status(404).json({ message: "Cannot find Hotel" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.hotel = hotel;
  next();
}

module.exports = hotelRouter;
