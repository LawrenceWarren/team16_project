//Add this we can use process.env prefix to access data stored in .env file
//TODO: Oh shit this server doesn't respond with pages when you give it a web request
// * Make the server deliver the frontend entry point, potentially may have to make it be 1 singular
// * React package. Eek.

require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//connect the database
//Read the URL from .env file. Change the URL to mongodb://localhost:27017/database_name;

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

//support json bodyParser
app.use(express.json());
app.use(cors());

//The backend router.
//https://localhost:portnumber/
//https://localhost:portnumber/login
//https://localhost:portnumber/registers

//!Upon merging, References to other routes should go here
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const foodRouter = require("./routes/food");
app.use("/food", foodRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.get("/", function (_req, res) {
  res.render("unmistakable");
});

//launch server
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
