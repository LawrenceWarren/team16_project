//This code was written by Wenzheng Shan.

const express = require("express");
const loginRouter = express.Router();
const User = require("../model/User");

//Get One Router
loginRouter.get("/:username", getUser, (_req, res) => {
  res.json(res.user);
});

//getUser MIDDLEWARE
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.find({ username: req.params.username });
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = loginRouter;
