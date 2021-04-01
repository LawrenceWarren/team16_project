//This code was written by Wenzheng Shan.

const express = require("express");
const loginRouter = express.Router();
const UserModel = require("../model/UserModel");

//Get One Router
loginRouter.get("/", async (_req, res) => {
  try {
    const UserReq = await UserModel.find();
    res.json(UserReq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Updates an existing field by it's _id - EDIT
loginRouter.put("/:id", async (req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    userInfo
  ) {
    if (err) return next(err);
    res.json(userInfo);
  });
});

module.exports = loginRouter;
