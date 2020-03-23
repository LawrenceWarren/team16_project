const express = require("express");
const foodRouter = express.Router();
const Food = require("../model/Food");

//Create One Route
foodRouter.post("/", async (req, res) => {
  const food = new Food({
    image: req.body.image,
    name: req.body.name,
    address: req.body.address,
    type: req.body.type,
    price: req.body.price,
    link: req.body.link
  });
  try {
    const newFood = await food.save();
    res.status(201).json({ newFood });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = foodRouter;

/*//Get All Route
foodRouter.get("/", async (_req, res) => {
  try {
    const foods = await find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One Route
foodRouter.get("/:id", getFood, (_req, res) => {
  res.json(res.user);
});

//Create One Route
foodRouter.post("/", async (req, res) => {
  const food = new Food({
    image: req.body.image,
    name: req.body.name,
    address: req.body.address,
    type: req.body.type,
    price: req.body.price,
    link: req.body.link
  });
  try {
    const newFood = await food.save();
    res.status(201).json({ newFood });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit One Route PUT version
foodRouter.put("/:id", getFood, async (req, res) => {
  try {
    const updatedFood = await res.food.set(req.body);
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit One Route PATCH version
foodRouter.patch("/:id", getFood, async (req, res) => {
  if (req.body.image != null) {
    res.food.image = req.body.image;
  }
  if (req.body.name != null) {
    res.food.name = req.body.name;
  }
  if (req.body.address != null) {
    res.food.address = req.body.address;
  }
  if (req.body.type != null) {
    res.food.type = req.body.type;
  }
  if (req.body.price != null) {
    res.food.price = req.body.price;
  }
  if (req.body.link != null) {
    res.food.link = req.body.link;
  }
  try {
    const updatedFood = await res.food.save();
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete One Route
foodRouter.delete("/:id", getFood, async (_req, res) => {
  try {
    await res.food.deleteOne();
    res.json({ message: "Food has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getUser MIDDLEWARE
async function getFood(req, res, next) {
  let food;
  try {
    food = await findById(req.params.id);
    if (food == null) {
      return res.status(404).json({ message: "Cannot find food" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.food = food;
  next();
}*/