const express = require("express");
const registerRouter = express.Router();
const User = require("../model/User");

//Create One Post Route
registerRouter.post("/", async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phone: req.body.phone
  });
  try {
    const newUser = await user.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = registerRouter;
