const express = require("express");
const charityRouter = express.Router();
const Charity = require("../model/Charity");

//Get All Route
charityRouter.get("/", async (req, res) => {
  try {
    const charities = await Charity.find();
    res.json(charities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One Route
charityRouter.get("/:id", getCharity, (req, res) => {
  res.json(res.charity);
});

//Create One Route
charityRouter.post("/", async (req, res) => {
  const charity = new Charity({
    charityId: req.body.charityId,
    charity_name: req.body.charity_name,
    charity_weblink: req.body.charity_weblink,
    charity_image: req.body.charity_image,
  });
  try {
    const newCharity = await charity.save();
    res.status(201).json({ newCharity });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit One Route PUT version
charityRouter.put("/:id", getCharity, async (req, res) => {
  try {
    const updatedCharity = await res.charity.set(req.body);
    res.json(updatedCharity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit One Route PATCH version
charityRouter.patch("/:id", getCharity, async (req, res) => {
  if (req.body.charityId != null) {
    res.charity.charityId = req.body.charityId;
  }
  if (req.body.charity_name != null) {
    res.charity.charity_name = req.body.charity_name;
  }
  if (req.body.charity_weblink != null) {
    res.charity.charity_weblink = req.body.charity_weblink;
  }
  if (req.body.charity_image != null) {
    res.charity.charity_image = req.body.charity_image;
  }
  try {
    const updatedCharity = await res.charity.save();
    res.json(updatedCharity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete One Route
charityRouter.delete("/:id", getCharity, async (req, res) => {
  try {
    await res.charity.deleteOne();
    res.json({ message: "Charity has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getCharity MIDDLEWARE
async function getCharity(req, res, next) {
  let charity;
  try {
    charity = await Charity.findById(req.params.id);
    if (charity == null) {
      return res.status(404).json({ message: "Cannot find Charity" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.charity = charity;
  next();
}

module.exports = charityRouter;
