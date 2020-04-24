//This code was initially written individually by all members of the group based off of a tutorial.
//It has been slightly refactored by Lawrence Warren for hosting on Heroku.

/* Server code
 * Initially, we had a backend folder. However, this backend folder was unnecessary
 * All backend is needed with the frontend nested within
 */

require("dotenv").config(); //Used for reading from .env file
const mongoose = require("mongoose"); //Used for opening a connection to the DB
const cors = require("cors"); //X site requests
const express = require("express"); //Used for writing server code
const favicon = require("express-favicon"); //Used for favicon related something
const path = require("path"); //Used for file path resolution

const port = process.env.PORT || 8080; //A const used for the path
const app = express();

//!Database code
//Connects to the cloud hosted database
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log("Server: " + error)); //If there's an error, log it
db.once("open", () =>
  console.log("Server: Connection to database established")
); //Log that the connection is established

//!Server code (in 5 lines! Express is cool)
app.use(express.json()); //This line is for json body parses - allows for POST routes
app.use(favicon(__dirname + "/build/favicon.ico")); //Finds the favicon for the site (the icon on tabs)
app.use(express.static(__dirname)); //Makes the returned pages static
app.use(express.static(path.join(__dirname, "build"))); //Uses the build file
app.use(cors()); //Allows for cross site requests

//!Upon merging, References to other routes should go here
app.use("/foodReq", require("./routes/foodRouter")); //Food page requests
app.use("/contactReq", require("./routes/contact")); //Contact page requests
app.use("/accommodationReq", require("./routes/hotel")); //Accommodation page requests
app.use("/charityReq", require("./routes/charity")); //Charity page requests

//?These routes are currently unused 10/04/2020
app.use("/login", require("./routes/login")); //?login requests
app.use("/register", require("./routes/register")); //?register requests

//When you load a new page, it gets that file out of the build folder - the /* means FOR any path
//If you enter an invalid path, you get a blank page.
app.get("/*", function (_req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//App begins listening on whatever port is specified
app.listen(port, () => console.log("Server: Listening on " + port));
