require("dotenv").config(); //Used for reading from .env file
const mongoose = require("mongoose"); //Used for opening a connection to the DB
const cors = require("cors"); //X site requests?
const express = require("express"); //Used for writing server code
const favicon = require("express-favicon"); //Used for favicon related something
const path = require("path"); //Used for file path resolution

const port = process.env.PORT || 8080; //A const used for the path
const app = express();

//!Database code
//Connects to the db
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error)); //If there's an error, log it
db.once("open", () => console.log("connection to db established")); //Log that the connection is established

//!Server code
app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

//!Upon merging, References to other routes should go here
app.use("/foodReq", require("./routes/food")); //Food pages requests
app.use("/login", require("./routes/login")); //?login requests, unused
app.use("/register", require("./routes/register")); //?register requests, unused?

//Routes for ping
app.get("/ping", function (req, res) {
  return res.send("pong");
});

//Route for returned html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log("App listening on " + port));
