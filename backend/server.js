//Add this we can use process.env prefix to access data stored in .env file
require("dotenv").config(); //Used for reading from .env file
const express = require("express"); //Used for creating APIs, handles the requests
const mongoose = require("mongoose"); //Used for opening a connection
const cors = require("cors"); //Cross-site requests?

//Opens a connection the database based on DATABASE_URL in .env
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Handles database connections
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

const app = express(); //Express app
//app.use(express.json()); //This line is for json body parses - does nothing?
app.use(cors()); //Allows for cross site scripting, which does something

//!Upon merging, References to other routes should go here
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const foodRouter = require("./routes/food");
const contactRouter = require("./routes/contact");
app.use("/food", foodRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/contact", contactRouter);

//launch server
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
