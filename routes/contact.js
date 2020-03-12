const express = require("express");
const contactRouter = express.Router();
const Contact = require("../model/Contact");

//Create One Post Route
contactRouter.post("/", async(req, res) => {
    const contact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phoneNum: req.body.phoneNum,
        message: req.body.message
    });
    try{
        const newContact = await contact.save();
        res.status(201).json({newContact});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


module.exports = contactRouter;