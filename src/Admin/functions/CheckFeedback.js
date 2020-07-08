import React from "react";
import axios from "axios";
import loading from "../../IntermediatePage/resources/loading.gif";
import "../css/element.css";

const ROUTE = "/feedbackReq";

class CheckContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  /**Runs when the page loads:
   * * Clears all existing elements from the screen
   * * Fetches from the server
   * * Builds the table if data was fetched.
   * * Displays an error if no data could be fetched.
   */
  async componentDidMount() {
    //Clear the table and message
    document.getElementById("dataTable").innerHTML = "";
    document.getElementById("message").innerText = "";

    await this.fetchFromServer(); //Calls information from the server asynchronously

    if (this.state.details.length) {
      this.buildTableHeader(); //Draw the top row of the table
      this.buildTableBody(); //Draw the body of the table
    } else {
      //Leave a notice saying no data could be fetched
      document.getElementById("message").innerText =
        "No contact information could be fetched from the database!";
    }
  }

  //Fetches the contact information from the database
  async fetchFromServer() {
    try {
      this.setTicker(true);
      const res = await fetch(ROUTE);
      if (res.status >= 400) {
        this.setTicker(false);
        throw new Error("There was an error in the HTTP request.");
      }

      this.setTicker(false);
      const info = await res.json();
      this.setState({ details: info });
    } catch (err) {
      this.setTicker(false);
      console.error("FeedbackCMS: " + err);
    }
  }

  /**Inverts the current state of the ticker
   * @param {Boolean} val Determines whether to make the state visible (truthy) or invisible (falsy).
   */
  setTicker(val) {
    let ticker = document.getElementById("ticker");

    if (val) {
      ticker.style.setProperty("display", "inline-block");
    } else {
      ticker.style.setProperty("display", "none");
    }
  }

  //Builds the first row of the tables
  buildTableHeader() {
    var row, cell, head, titles;

    titles = [
      "Experience",
      "Comment",
      "Name",
      "Email",
      "Register Date",
      "Delete",
    ];

    //Creates a new row, appends that row to the table
    head = document.createElement("thead");
    row = document.createElement("tr");
    document.getElementById("dataTable").appendChild(head);
    head.appendChild(row);

    //Loops through the values in the above array, and populates the header
    titles.forEach((title) => {
      cell = document.createElement("th");
      cell.appendChild(document.createTextNode(title));
      row.appendChild(cell);
    });
  }

  //Builds the body of the table
  buildTableBody() {
    var row, cell, body, rowValues;
    body = document.createElement("tbody");
    document.getElementById("dataTable").appendChild(body);

    /**Loops through each element in state.details,
     * and populates a new row in the table with
     *      the values from state.details        */
    this.state.details.forEach((detail, i) => {
      row = document.createElement("tr");
      body.appendChild(row);

      //Defines an array to store the values of the current element
      //of state.details, to be looped through
      rowValues = [
        detail.experience,
        detail.comment,
        detail.name,
        detail.email,
        detail.registerDate,
        {
          innerText: "Delete entry",
          function: (i) => {
            this.deleteEntry(i);
          },
          id: "deleteButton",
        },
      ];

      //Looping through the above array
      for (let j = 0; j <= 5; j++) {
        cell = document.createElement("td");

        //For the first 4 elements, it is simply appending a string
        if (j <= 4) {
          cell.appendChild(document.createTextNode(rowValues[j]));
        }
        //For the last column append a button.
        else {
          let button = document.createElement("button");
          button.innerText = rowValues[j].innerText;
          button.className = "tableButtons";
          button.id = rowValues[j].id;
          button.addEventListener("click", (event) => {
            event.preventDefault();
            rowValues[j].function(i);
          });

          cell.appendChild(button);
        }
        row.appendChild(cell);
      }
    });
  }

  //Delete entry i from the array & visually remove from the table
  deleteEntry(i) {
    this.setTicker(true);

    //Delete
    axios
      .delete(`${ROUTE}/${this.state.details[i]._id}`)
      //If successful, rebuild table
      .then((_response) => {
        this.componentDidMount();
      })
      //If failed, log and reflect on screen
      .catch(() => {
        this.setTicker(false);
        console.error("ContactCMS: Error using DELETE route.");
        document.getElementById("message").innerText = "Failed to delete.";
      });
  }

  //Render!
  render() {
    /* jshint ignore:start */
    return (
      <div>
        <h1>Received Feedback Information</h1>

        <img id="ticker" src={loading} />

        <p id="message"></p>

        <table id="dataTable" border="1"></table>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default CheckContact;
