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
app.use(express.json()); //This line is for json body parses - allows for POST routes
app.use(cors()); //Allows for cross site scripting, which does something

//!Upon merging, References to other routes should go here
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/food", require("./routes/food"));
app.use("/contact", require("./routes/contact"));
app.use("/hotel", require("./routes/hotel"));
app.use("/charity", require("./routes/charity"));

//launch server
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
