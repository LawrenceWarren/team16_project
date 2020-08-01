//This code was written by Lawrence Warren

import React from "react";
import "../css/element.css";
import axios from "axios";
import { cloneDeep } from "lodash";
import loading from "../../IntermediatePage/resources/loading.gif";
import generateDate from "../../generateDate/generateDate.js";

const ROUTE = "/charityReq";

class CheckCharities extends React.Component {
  /**Sets the state for the component
   */
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      backup: [],
    };
  }

  /**Runs when the page loads:
   * * Clears all existing elements from the screen
   * * Fetches from the server
   * * Builds the table if data was fetched.
   * * Displays an error if no data could be fetched.
   */
  async componentDidMount() {
    this.clearElements();
    await this.fetchFromServer();

    //If data could be fetched from the server, render the table
    if (this.state.details.length) {
      this.buildTableHeader();
      this.buildTableBody();
    } else {
      //Leave a notice saying no data could be fetched
      document.getElementById("message").innerText =
        "No information could be fetched from the database!";
    }
  }

  /**Fetches the eateries data from the database,
   * populates this.state.details[] with this data
   */
  async fetchFromServer() {
    try {
      this.setTicker(true);
      const res = await fetch(ROUTE);
      if (res.status >= 400) {
        this.setTicker(false);
        throw new Error("There was an error in the HTTP request.");
      }

      this.setTicker(false);
      const food = await res.json();
      this.state.backup = cloneDeep(food); //Make a copy
      this.state.details = food; //state.details is now a reference to food
    } catch (err) {
      this.setTicker(false);
      console.error("CharitiesCMS: " + err);
    }
  }

  /**Clears all elements of the screen
   */
  clearElements() {
    document.getElementById("message").innerText = "";
    document.getElementById("form").innerHTML = ""; //Clear form
    document
      .getElementById("form")
      .style.setProperty("border", "0.25vw solid #ffffff"); //Clear form border
    document.getElementById("dataTable").innerHTML = ""; //Clear table
    document.getElementById("formHeading").innerText = ""; //Clear form heading
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

  /**Builds the head of the table
   */
  buildTableHeader() {
    //Variables used
    var row, cell, head;
    var titles = ["Name", "Link", "Image", "Date added", "Edit", "Delete"];

    //Creates a new row, appends that row to the table
    head = document.createElement("thead");
    row = document.createElement("tr");
    document.getElementById("dataTable").appendChild(head);
    head.appendChild(row);

    //Creates each column in the head
    titles.forEach((title) => {
      cell = document.createElement("th");
      cell.appendChild(document.createTextNode(title));
      row.appendChild(cell);
    });
  }

  /**Builds the body of the table
   */
  buildTableBody() {
    let row, cell, img, body, columnValues;
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
      columnValues = [
        detail.charity_name, //0
        detail.charity_weblink, //1
        detail.charity_image, //2
        detail.registerDate, //3
        {
          //4
          innerText: "Edit entry", //Defines text for the button
          function: (i) => {
            this.buildForm(i, "edit"); //Defines a function for the button click
          },
          id: "editButton",
        },
        {
          //5
          innerText: "Delete entry", //Defines text for the button
          function: (i) => {
            this.deleteEntry(i); //Defines a function for the button click
          },
          id: "deleteButton",
        },
      ];

      //If it ain't broke, don't fix it
      for (let j = 0; j <= 5; j++) {
        cell = document.createElement("td");

        //Text
        if (j === 0 || j === 3) {
          cell.appendChild(document.createTextNode(columnValues[j]));
        }
        //Link
        else if (j === 1) {
          let linkTag = document.createElement("a");
          let link = document.createTextNode("Hover for full link");

          linkTag.appendChild(link);
          linkTag.title = columnValues[j];
          linkTag.href = columnValues[j];

          cell.appendChild(linkTag);
        }
        //Image
        else if (j === 2) {
          img = document.createElement("img");
          img.setAttribute("src", columnValues[j]);
          img.className = "tableImage";
          cell.appendChild(img);
        }
        //Buttons
        else if (j <= 5) {
          let button = document.createElement("button");
          button.innerText = columnValues[j].innerText;
          button.id = columnValues[j].id;
          button.className = "tableButtons";
          button.addEventListener("click", (event) => {
            event.preventDefault();
            columnValues[j].function(i);
          });

          cell.appendChild(button);
        }

        row.appendChild(cell);
      }
    });
  }

  /**Open a form, populated with the data from record i, which sends a PUT to the database upon submit.
   * @param i the record being edited.
   * @param submitState declares what the form submission does
   */
  buildForm(i, submitState) {
    var labelValues = ["charity_name", "charity_weblink", "charity_image"];
    this.setState({ details: cloneDeep(this.state.backup) }); //Ensures the state is the same as in the db

    //Gets the form, clears it, adds a border and sets it's on submit event
    var mainDiv = document.getElementById("form");
    mainDiv.innerHTML = "";
    mainDiv.style.setProperty("border", "0.25vw solid #cccccc");

    //Action of submit changes depending on submitState parameter.
    mainDiv.onsubmit = (event) => {
      event.preventDefault();

      if (submitState === "edit") {
        this.editEntry(i);
      } else if (submitState === "addition") {
        this.addEntry();
      }
    };

    //Sets the form header
    if (submitState === "edit") {
      document.getElementById(
        "formHeading"
      ).innerText = `Edit '${this.state.details[i].charity_name}'`;
    } else if (submitState === "addition") {
      document.getElementById("formHeading").innerText = "Make new addition";
    }

    //Populates the form with label/input pairs
    for (let j = 0; j <= 2; j++) {
      //Populating the label
      let label = document.createElement("label");
      label.innerText = labelValues[j];
      //Populating the input
      let input = document.createElement("input");
      input.type = "text";
      input.name = labelValues[j];
      if (submitState === "edit") {
        input.value = this.state.details[i][labelValues[j]];
      }
      input.required = true;

      //When the input box fires an on change event, update the relevant state.details entry to reflect the changes.
      //Doing this using setState (i.e. safely) is incredibly obtuse
      input.onchange = (event) => {
        this.alterArrayMemberObjectDetails(
          i,
          event.target.name,
          event.target.value
        );
      };

      mainDiv.appendChild(label);
      label.appendChild(document.createElement("br"));
      label.appendChild(input);
      mainDiv.appendChild(document.createElement("br"));
    }

    //Creates and appends the submit button to the end
    let button = document.createElement("button");
    button.type = "submit";
    button.innerText = `Submit ${submitState}`;
    mainDiv.appendChild(button);
  }

  /**Delete entry i from the array & visually remove from the table
   * @param i the integer value of the database entry to be deleted.
   */
  deleteEntry(i) {
    this.setTicker(true); //Adds a ticker

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
        console.error("CharitiesCMS: Error using DELETE route.");
        document.getElementById("message").innerText = "Failed to delete.";
      });
  }

  /**Edit entry i in the database
   * @param i the integer value of the database entry to be deleted.
   */
  editEntry(i) {
    this.setTicker(true); //Adds a ticker

    //PUT by id
    axios({
      url: `${ROUTE}/${this.state.details[i]._id}`,
      method: "PUT",
      data: this.state.details[i],
    })
      //If successful, rebuild the table
      .then((_response) => {
        this.componentDidMount();
      })
      //If failed, log failure and reflect on screen
      .catch(() => {
        this.setTicker(false);
        console.error("CharitiesCMS: Error using PUT route.");
        document.getElementById("message").innerText = "Failed to edit.";
      });
  }

  /**Add an entry to the database
   */
  addEntry() {
    this.alterArrayMemberObjectDetails(
      0,
      "registerDate",
      generateDate.formattedDate(new Date(Date.now()))
    );

    this.setTicker(true); //Adds a ticker

    axios({
      url: ROUTE,
      method: "POST",
      data: this.state.details[0],
    })
      //If there is a successful response, rebuild the table
      .then((_response) => {
        this.componentDidMount();
      })
      //If it fails, log & reflect on screen.
      .catch(() => {
        this.setTicker(false);
        console.error("CharitiesCMS: Error using POST route.");
        document.getElementById("message").innerText = "Failed to add.";
      });
  }

  /** Alters a specific attribute of an array member object within state.
   * @param {Number} index The index of the array where object can be found.
   * @param {String} attribute The object attribute to be changed.
   * @param {String} data The data the object attribute will be changed to.
   */
  alterArrayMemberObjectDetails(index, attribute, data) {
    //Create a shallow copy of details and a copy of the relevant object.
    let details = [...this.state.details];
    let detail = {
      ...details[index],
      [attribute]: data, //Alter the relevant attribute
    };

    //Move the updated details back into the array and update state
    details[index] = detail;
    this.setState({
      details,
    });
  }

  /**Renders the page */
  render() {
    /* jshint ignore:start */
    return (
      <div>
        <div className="tickerString">
          <h1>Currently listed charity information</h1>

          {/*The ticker to display */}
          <img id="ticker" src={loading} />
        </div>

        <br />

        {/*Message displays if the database collection is empty */}
        <p id="message"></p>

        {/*Table displays database info if it is available */}
        <table id="dataTable" border="1"></table>

        {/*The button for adding a new entry to the db */}
        <button
          className="addButton"
          onClick={() => {
            this.buildForm(0, "addition");
          }}
        >
          Add new entry
        </button>

        {/*This form has content generated for it when the edit button is pressed */}
        <div id="formContainer">
          <h2 id="formHeading"></h2>
          <form id="form"></form>
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default CheckCharities;
