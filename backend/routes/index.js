const express = require("express");
const userRouter = express.Router();
const User = require("../model/User");

//Get All Route
userRouter.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get One Route
userRouter.get("/:hotelname", getUser, (req, res) => {
    res.json(res.user);
});

//Create One Route
userRouter.post("/", async(req, res) => {
    const user = new User({
        hotelname: req.body.hotelname,
        description: req.body.description,
        linkBook: req.body.linkBook,
        linkReview: req.body.linkReview,
    });
    try{
        const newUser = await user.save();
        res.status(201).json({newUser});
    } catch (err){
        res.status(400).json({message: err.messsage});
    }
});

//Edit One Route PUT version
userRouter.put("/:hotelname", getUser, async(req, res) => {
    try {
        const updatedUser = await res.user.set(req.body);
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

//Edit One Route PATCH version
userRouter.patch("/:hotelname", getUser, async (req, res) => {
    if (req.body.hotelname != null){
        res.user.hotelname = req.body.hotelname;
    }
    if (req.body.description != null){
        res.user.description = req.body.description;
    }
    if (req.body.linkBook != null){
        res.user.linkBook = req.body.linkBook;
    }
    if (req.body.linkReview != null){
        res.user.linkReview = req.body.linkReview;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

//Delete One Route
userRouter.delete("/:hotelname", getUser, async (req, res) => {
    try{
        await res.user.deleteOne();
        res.json({message: "User has been deleted" });
    } catch (err) {
        res.status(500).json({message: err.message });
    }
});

//getUser MIDDLEWARE
async function getUser(req, res, next) {
    let user;
    try{
        user = await User.findById(req.params.hotelname);
        if(user == null) {
            return res.status(404).json({message: "Cannot find User"});
        }
    }   catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.user = user;
    next();
}

module.exports = userRouter;
