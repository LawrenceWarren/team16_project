//Add this we can use process.env prefix to access data stored in .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//connect the database
//Read the URL from .env file. Change the URL to mongodb://localhost:27017/database_name;
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db has been established"));


//support json bodyParser
const app = express();
app.use(express.json());
app.use(cors());

//The backend router.
//https://localhost:portnumber/
//https://localhost:portnumber/login
//https://localhost:portnumber/registers
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const indexRouter = require("./routes/index");
const charityRouter = require("./routes/charity");
app.use("/index", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/charity", charityRouter);

//launch server
app.listen(process.env.PORT, () => console.log(`server has started at port ${process.env.PORT}`));

