const express = require("express");
const registerRouter = express.Router();
const Hotel = require("../model/Hotel");

//Create One Post Route
registerRouter.post("/", async(req, res) => {
    const hotel = new Hotel({
        hotelname: req.body.hotelname,
        description: req.body.description,
        linkBook: req.body.linkBook,
        linkReview: req.body.linkReview
    });
    try{
        const newHotel = await hotel.save();
        res.status(201).json({newHotel});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


module.exports = registerRouter;
