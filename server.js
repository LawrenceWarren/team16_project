//This code was initially written individually by all members of the group based off of a tutorial.
//It has been slightly refactored by Lawrence Warren for hosting on Heroku.

/* Server code */

require("dotenv").config(); //Used for reading from .env file
const mongoose = require("mongoose"); //Used for opening a connection to the DB
const cors = require("cors"); //cross site requests
const express = require("express"); //Used for writing server code
const favicon = require("express-favicon"); //Used for favicon related something
const path = require("path"); //Used for file path resolution

const PORT = process.env.PORT || 8080; //A const used for the path
const app = express(); //Creates the server app
const MAX_ATTEMPTS = 3; //Defines the maximum number of database connection attempts to be made

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
      //Exit program if no connection could be made after MAX_ATTEMPTS attempts
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
app.use("/feedbackReq", require("./routes/feedback")); //Feedback page requests
app.use("/loginReq", require("./routes/login")); //CMS login requests

//When you load a new page, it gets that file out of the build folder - the /* means FOR any path
//If you enter an invalid path, you get a blank page.
app.get("/*", function (_req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//App begins listening for requests on specified port
app.listen(PORT, () =>
  console.log("Server: Listening for requests on " + PORT)
);
