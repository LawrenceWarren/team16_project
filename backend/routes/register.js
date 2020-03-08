const express = require("express");
const registerRouter = express.Router();
const User = require("../model/User");

//Create One Post Route
registerRouter.post("/", async(req, res) => {
    const user = new User({
        hotelname: req.body.hotelname,
        description: req.body.description,
        linkBook: req.body.linkBook,
        linkReview: req.body.linkReview
    });
    try{
        const newUser = await user.save();
        res.status(201).json({newUser});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


module.exports = registerRouter;
