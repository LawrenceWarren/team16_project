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
app.use("/food", require("./routes/food")); //Food pages requests
app.use("/login", require("./routes/login")); //?login requests, unused
app.use("/register", require("./routes/register")); //?register requests, unused

//Listen on the port specified in .env
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
