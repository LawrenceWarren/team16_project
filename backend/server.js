//Add this we can use process.env prefix to access data stored in .env file
require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connect the database
//Read the URL from .env file. Change the URL to mongodb://localhost:27017/database_name;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

//support json bodyParser
app.use(express.json());

//The backend router.
//https://localhost:portnumber/
//https://localhost:portnumber/login
//https://localhost:portnumber/registers
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const foodRouter = require("./routes/food");
app.use("/food", foodRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

//launch server
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
