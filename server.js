/*This code was initially written individually by all members
of the group based off of a tutorial. It has been slightly refactored 
by Lawrence Warren for hosting on Heroku.*/

//! SERVER

require("dotenv").config(); //Used for reading from .env file
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const PORT = process.env.PORT || 8080; //Used for the path
const app = express(); //Creates the server app
const MAX_ATTEMPTS = 3; //The maximum number of database connection attempts

/**Attempts to make a connection to the database MAX_ATTEMPTS times
 * This function is self invoking!
 * @param {Number} attempt the attempt counter.
 */
(function connectToDb(attempt) {
  console.log(`Server: database connection attempt ${attempt}:`);

  //Attempts connection
  mongoose
    .connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    //Success!
    .then(() => console.log("Server: Connection to database established."))
    //Failure!
    .catch((_error) => {
      console.log("        Database connection attempt failed.");
      attempt++;
      //Exit program if no connection after MAX_ATTEMPTS attempts
      if (attempt >= MAX_ATTEMPTS) {
        console.log(
          `Server: Failed to connect after ${MAX_ATTEMPTS} attempts, exiting.`
        );
        process.exit();
        //Retry connection
      } else {
        connectToDb(attempt);
      }
    });
})(0);

//!Server code (in 5 lines! Express is cool)
app.use(express.json()); //allows for POST routes
app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname)); //Makes the returned pages static
app.use(express.static(path.join(__dirname, "build"))); //Uses the build file
app.use(cors()); //Allows for cross site requests

//!Upon merging, References to other routes should go here
app.use("/foodReq", require("./routes/foodRouter")); //Food requests
app.use("/contactReq", require("./routes/contactRouter")); //Contact requests
app.use("/accommodationReq", require("./routes/hotelRouter")); //Accommodation requests
app.use("/charityReq", require("./routes/charityRouter")); //Charity requests
app.use("/feedbackReq", require("./routes/feedbackRouter")); //Feedback requests
app.use("/loginReq", require("./routes/loginRouter")); //CMS login requests
app.use("/cupboardReq", require("./routes/cupboardRouter")); //Cupboard empty requests
//TODO: add 404 page?

/*When you load a new page, it gets that file out of the 
build folder - the /* means FOR any path. if you enter 
an invalid path, you get a blank page. */
app.get("/*", function (_req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//App begins listening for requests on specified port
app.listen(PORT, () =>
  console.log("Server: Listening for requests on " + PORT)
);
