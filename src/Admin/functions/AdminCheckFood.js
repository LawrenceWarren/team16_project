//This code was written by Lawrence Warren

import React from "react";
import "../css/subPage.css";
import axios from "axios";
import { cloneDeep } from "lodash";

class AdminCheckFood extends React.Component {
  /**Sets the state */
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      backup: [],
    };
  }

  /**Fetches from the server, build's the table
   * header and body from fetched data
   */
  async componentDidMount() {
    document.getElementById("form").innerHTML = "";
    document.getElementById("eateriesInfo").innerHTML = "";
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

  /**Fetches the eateries data from the database,
   * populates this.state.details[] with this data
   */
  async fetchFromServer() {
    console.log("EateriesCMS: Fetching from server...");
    try {
      const res = await fetch("/foodReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const food = await res.json();
      //Make copies (not references)
      this.state.details = cloneDeep(food);
      this.state.backup = cloneDeep(food);

      console.log("EateriesCMS: Data from the server has been received!");
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
    let row, cell, img, body, rowValues;

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
      rowValues = [
        eatery.name,
        eatery.address,
        eatery.type,
        eatery.price,
        eatery.link,
        eatery.image,
        {
          innerText: "Edit entry", //Defines text for the button
          function: (i) => {
            this.buildForm(i, "edit"); //Defines a function for the button click
          },
        },
        {
          innerText: "Delete entry", //Defines text for the button
          function: (i) => {
            this.deleteEntry(i); //Defines a function for the button click
          },
        },
      ];

      //Looping through the above array
      for (let j = 0; j <= 7; j++) {
        cell = document.createElement("td");

        //For the first 5 elements, create regular text variables
        if (j <= 4) {
          cell.appendChild(document.createTextNode(rowValues[j]));
        }
        //For the 6th element, display an image
        else if (j === 5) {
          img = document.createElement("img");
          img.setAttribute("src", rowValues[j]);
          cell.appendChild(img);
        }
        //For the final two elements, display buttons
        else {
          let button = document.createElement("button");
          button.innerText = rowValues[j].innerText;
          button.addEventListener("click", () => {
            rowValues[j].function(i);
          });

          cell.appendChild(button);
        }

        row.appendChild(cell);
      }
    });
  }

  /**Open a form, populated with the data from record i,
   * which sends a PUT to the database upon submit.
   * @param i the record being edited.
   * @param submitState declares what the form submission does
   */
  buildForm(i, submitState) {
    var labelValues = ["name", "address", "type", "price", "link", "image"];
    this.setState({ details: cloneDeep(this.state.backup) }); //Ensures the state is the same as in the db

    //Gets the form, clears it and sets it's on submit event
    var mainDiv = document.getElementById("form");
    mainDiv.innerHTML = "";

    //Action of submit changes depending on state of
    mainDiv.onsubmit = (event) => {
      if (submitState === "edit") {
        this.editEntry(event, i);
      } else if (submitState === "addition") {
        this.addEntry(event, i);
      }
    };

    //Populates the form with label/input pairs
    for (let j = 0; j <= 5; j++) {
      let label = document.createElement("label");
      label.innerText = labelValues[j];

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
        let details = [...this.state.details]; //Get a shallow copy of the array
        let detail = {
          //Create a new object, with the old details of the element with a slight change
          ...details[i],
          [event.target.name]: event.target.value,
        };
        details[i] = detail; //Copy that back into the array copy
        this.setState({ details }); //Set state to reflect the copy
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
    axios
      .delete(`/foodReq/${this.state.details[i]._id}`)
      .then((_response) => {
        this.componentDidMount();
      })
      .catch(() => {
        console.error("EateriesCMS: Error using DELETE route.");
        this.componentDidMount();
      });
  }

  /**Edit entry i in the database
   * @param event the event which called editEntry
   * @param i the integer value of the database entry to be deleted.
   */
  editEntry(event, i) {
    event.preventDefault();
    const payload = this.state.details[i];

    //PUT by id
    axios({
      url: `/foodReq/${this.state.details[i]._id}`,
      method: "PUT",
      data: payload,
    })
      .then((_response) => {
        this.componentDidMount();
      })
      .catch(() => {
        console.error("EateriesCMS: Error using PUT route.");
        this.componentDidMount();
      });
  }

  /**Add an entry to the database*/
  addEntry(event, i) {
    event.preventDefault();

    axios({
      url: "/foodReq",
      method: "POST",
      data: this.state.details[i],
    })
      .then((_response) => {
        this.componentDidMount();
      })
      .catch(() => {
        console.error("EateriesCMS: Error using PUT route.");
        this.componentDidMount();
      });
  }

  /**Renders the page */
  render() {
    /* jshint ignore:start */
    return (
      <div>
        <h1>Contact Information</h1>
        {/*Table displays database info if it is available */}
        <table id="eateriesInfo" border="1"></table>
        {/*Message displays if the database collection is empty */}
        <p id="message"></p>
        {/*The button for adding a new entry to the db */}
        <button
          onClick={() => {
            this.buildForm(0, "addition");
          }}
        >
          Add new entry
        </button>
        {/*This form has content generated for it when the edit button is pressed */}
        <form id="form"></form>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default AdminCheckFood;
