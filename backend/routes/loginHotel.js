const express = require("express");
const loginRouter = express.Router();
const Hotel = require("../model/Hotel");

//Get One Router
loginRouter.get("/:hotelname", getHotel, (req, res) => {
    res.json(res.hotel);
});

//getHotel MIDDLEWARE
async function getHotel(req, res, next) {
    let hotel;
    try{
        hotel = await Hotel.find({"hotelname" : req.params.hotelname});
        if (hotel == null) {
            return res.status(404).json({message: "Cannot find hotel"});
        }
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.hotel = hotel;
    next();
}

module.exports = loginRouter;
