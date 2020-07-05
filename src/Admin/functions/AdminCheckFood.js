//This code was written by Lawrence Warren

import React from "react";
import "../css/subPage.css";
import axios from "axios";
import { cloneDeep } from "lodash";
const generateDate = require("../../generateDate/generateDate.js");

const ROUTE = "/foodReq";

class AdminCheckFood extends React.Component {
  /**Sets the state for the component
   */
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      backup: [],
    };
  }

  /**Fetches from the server, build's the table header and body from fetched data
   */
  async componentDidMount() {
    this.clearElements();
    await this.fetchFromServer();

    //If data could be fetched from the server, render the table
    if (this.state.details.length) {
      document.getElementById("message").innerText = "";
      this.buildTableHeader();
      this.buildTableBody();
    } else {
      //Leave a notice saying no data could be fetched
      document.getElementById("message").innerText =
        "No information could be fetched from the database!";
    }
  }

  /**Clears all elements of the screen
   */
  clearElements() {
    document.getElementById("form").innerHTML = ""; //Clear form
    document
      .getElementById("form")
      .style.setProperty("border", "0.25vw solid #ffffff"); //Clear form border
    document.getElementById("eateriesInfo").innerHTML = ""; //Clear table
    document.getElementById("formHeading").innerText = ""; //Clear form heading
  }

  /**Fetches the eateries data from the database,
   * populates this.state.details[] with this data
   */
  async fetchFromServer() {
    try {
      //TODO: add ticker
      const res = await fetch(ROUTE);
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      //TODO: clear ticker
      const food = await res.json();
      this.state.backup = cloneDeep(food); //Make a copy
      this.state.details = food; //state.details is now a reference to food
    } catch (err) {
      console.error("EateriesCMS: " + err);
    }
  }

  /**Builds the head of the table
   */
  buildTableHeader() {
    //Variables used
    var row, cell, head;
    var titles = [
      "Name",
      "Address",
      "Type",
      "Price",
      "Link",
      "Image",
      "Date added",
      "Edit",
      "Delete",
    ];

    //Creates a new row, appends that row to the table
    head = document.createElement("thead");
    row = document.createElement("tr");
    document.getElementById("eateriesInfo").appendChild(head);
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
    document.getElementById("eateriesInfo").appendChild(body);

    /**Loops through each element in state.details,
     * and populates a new row in the table with
     *      the values from state.details        */
    this.state.details.forEach((eatery, i) => {
      row = document.createElement("tr");
      body.appendChild(row);

      //Defines an array to store the values of the current element
      //of state.details, to be looped through
      columnValues = [
        eatery.name, //0
        eatery.address, //1
        eatery.type, //2
        eatery.price, //3
        eatery.link, //4
        eatery.image, //5
        eatery.registerDate, //6
        {
          //7
          innerText: "Edit entry", //Defines text for the button
          function: (i, _event) => {
            this.buildForm(i, "edit"); //Defines a function for the button click
          },
          id: "editButton",
        },
        {
          //8
          innerText: "Delete entry", //Defines text for the button
          function: (i, event) => {
            this.deleteEntry(i, event); //Defines a function for the button click
          },
          id: "deleteButton",
        },
      ];

      //If it ain't broke, don't fix it
      for (let j = 0; j <= 8; j++) {
        cell = document.createElement("td");

        //Text
        if (j <= 4 || j === 6) {
          cell.appendChild(document.createTextNode(columnValues[j]));
        }
        //Image
        else if (j === 5) {
          img = document.createElement("img");
          img.setAttribute("src", columnValues[j]);
          cell.appendChild(img);
        }
        //Buttons
        else if (j <= 8) {
          let button = document.createElement("button");
          button.innerText = columnValues[j].innerText;
          button.id = columnValues[j].id;
          button.className = "tableButtons";
          button.addEventListener("click", (event) => {
            columnValues[j].function(i, event);
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
    var labelValues = ["name", "address", "type", "price", "link", "image"];
    this.setState({ details: cloneDeep(this.state.backup) }); //Ensures the state is the same as in the db

    //Gets the form, clears it, adds a border and sets it's on submit event
    var mainDiv = document.getElementById("form");
    mainDiv.innerHTML = "";
    mainDiv.style.setProperty("border", "0.25vw solid #cccccc");

    //Action of submit changes depending on submitState parameter.
    mainDiv.onsubmit = (event) => {
      if (submitState === "edit") {
        this.editEntry(event, i);
      } else if (submitState === "addition") {
        this.addEntry(event);
      }
    };

    //Sets the form header
    if (submitState === "edit") {
      document.getElementById("formHeading").innerText = "Make edit";
    } else if (submitState === "addition") {
      document.getElementById("formHeading").innerText = "Make new addition";
    }

    //Populates the form with label/input pairs
    for (let j = 0; j <= 5; j++) {
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
   * @param event the event which called deleteEntry.
   */
  deleteEntry(i, event) {
    event.preventDefault();

    //Delete
    axios
      .delete(`${ROUTE}/${this.state.details[i]._id}`)
      //TODO: add ticker
      .then(() => {})
      //If successful, rebuild table
      .then((_response) => {
        this.componentDidMount();
      })
      //If failed, log and reflect on screen
      .catch(() => {
        console.error("EateriesCMS: Error using DELETE route.");
        document.getElementById("message").innerText = "Failed to delete.";
      });
  }

  /**Edit entry i in the database
   * @param event the event which called editEntry
   * @param i the integer value of the database entry to be deleted.
   */
  editEntry(event, i) {
    event.preventDefault(); //Stops the page refreshing

    //PUT by id
    axios({
      url: `${ROUTE}/${this.state.details[i]._id}`,
      method: "PUT",
      data: this.state.details[i],
    })
      //TODO: add ticker
      .then(() => {})
      //If successful, rebuild the table
      .then((_response) => {
        this.componentDidMount();
      })
      //If failed, log failure and reflect on screen
      .catch(() => {
        console.error("EateriesCMS: Error using PUT route.");
        document.getElementById("message").innerText = "Failed to edit.";
      });
  }

  /**Add an entry to the database
   * @param event The event which called `addEntry()`
   */
  addEntry(event) {
    event.preventDefault(); //Stops the page refreshing

    this.alterArrayMemberObjectDetails(
      0,
      "registerDate",
      generateDate.formattedDate(new Date(Date.now()))
    );

    axios({
      url: ROUTE,
      method: "POST",
      data: this.state.details[0],
    })
      //TODO: add ticker
      .then(() => {})
      //If there is a successful response, rebuild the table
      .then((_response) => {
        this.componentDidMount();
      })
      //If it fails, log & reflect on screen.
      .catch(() => {
        console.error("EateriesCMS: Error using POST route.");
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
        <h1>Food Information</h1>
        {/*Message displays if the database collection is empty */}
        <p id="message"></p>

        {/*Table displays database info if it is available */}
        <table id="eateriesInfo" border="1"></table>

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
          <h1 id="formHeading"></h1>
          <form id="form"></form>
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default AdminCheckFood;
