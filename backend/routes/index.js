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
userRouter.get("/:id", getUser, (req, res) => {
    res.json(res.user);
});

//Create One Route
userRouter.post("/", async(req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
    });
    try{
        const newUser = await user.save();
        res.status(201).json({newUser});
    } catch (err){
        res.status(400).json({message: err.messsage});
    }
});

//Edit One Route PUT version
userRouter.put("/:id", getUser, async(req, res) => {
    try {
        const updatedUser = await res.user.set(req.body);
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

//Edit One Route PATCH version
userRouter.patch("/:id", getUser, async (req, res) => {
    if (req.body.firstname != null){
        res.user.firstname = req.body.firstname;
    }
    if (req.body.lastname != null){
        res.user.lastname = req.body.lastname;
    }
    if (req.body.username != null){
        res.user.username = req.body.username;
    }
    if (req.body.password != null){
        res.user.password = req.body.password;
    }
    if (req.body.email != null){
        res.user.email = req.body.email;
    }
    if (req.body.phone != null){
        res.user.phone = req.body.phone;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

//Delete One Route
userRouter.delete("/:id", getUser, async (req, res) => {
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
        user = await User.findById(req.params.id);
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