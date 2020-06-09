//This code was written by Lawrence Warren

import React from "react";
import "../css/subPage.css";

class AdminCheckFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          _id: 0,
          image: "",
          name: "",
          address: "",
          type: "",
          price: "",
          link: "",
          registerDate: "",
        },
      ],
    };
  }

  //Calls the server after the DOM is rendered
  componentDidMount = async () => {
    await this.fetchFromServer();
    this.buildTableHeader();
    this.buildTableBody();
  };

  //Fetches the eateries info from the database
  fetchFromServer = async () => {
    console.log("EateriesCMS: Fetching from server...");
    try {
      const res = await fetch("/foodReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const food = await res.json();
      this.setState({ details: food });
      console.log("EateriesCMS: Data from the server has been received!");
    } catch (err) {
      console.error("EateriesCMS: " + err);
    }
  };

  //Builds the first row of the tables
  buildTableHeader = () => {
    //Variables used
    var row, cell, head;

    //Creates a new row, appends that row to the table
    head = document.createElement("thead");
    row = document.createElement("tr");
    document.getElementById("eateriesInfo").appendChild(head);
    head.appendChild(row);

    //Creates a new cell (firstname), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Eatery name"));
    row.appendChild(cell);

    //Creates a new cell (lastname), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Eatery address"));
    row.appendChild(cell);

    //Creates a new cell (email address), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Eatery type"));
    row.appendChild(cell);

    //Creates a new cell (phone number), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Eatery price"));
    row.appendChild(cell);

    //Creates a new cell (message), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Eatery link"));
    row.appendChild(cell);

    //Creates a new cell (message), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Eatery image"));
    row.appendChild(cell);

    //Creates a new cell (delete button), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Edit"));
    row.appendChild(cell);

    //Creates a new cell (delete button), populates the cell, appends the cell to the row
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Delete"));
    row.appendChild(cell);
  };

  //Builds the body of the table
  buildTableBody = () => {
    //variables used
    var row, cell, body;

    body = document.createElement("tbody");
    document.getElementById("eateriesInfo").appendChild(body);

    //Loops through each element in the array `state.details`
    this.state.details.forEach((eatery, i) => {
      //!Defines row as a new row, and appends it to the table
      row = document.createElement("tr");
      body.appendChild(row);

      //!Adding the firstname of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(eatery.name));
      row.appendChild(cell);

      //!Adding the lastname of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(eatery.address));
      row.appendChild(cell);

      //!Adding the email of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(eatery.type));
      row.appendChild(cell);

      //!Adding the phone number of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(eatery.price));
      row.appendChild(cell);

      //!Adding the message of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(eatery.link));
      row.appendChild(cell);

      //!Adding the message of the current element to the row
      //TODO: make it display the image (not just the text link)
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(eatery.image));
      row.appendChild(cell);

      //!Adding the edit button of the current element to the row
      cell = document.createElement("td");

      //Each row has a unique delButton
      var editButton = document.createElement("button");
      editButton.innerText = `Edit entry`;

      //When the button is clicked, delete the entry the button relates to
      editButton.addEventListener("click", () => {
        this.editEntry(i);
      });

      cell.appendChild(editButton);
      row.appendChild(cell);

      //!Adding the delete button of the current element to the row
      cell = document.createElement("td");

      //Each row has a unique delButton
      var delButton = document.createElement("button");
      delButton.innerText = `Delete entry`;

      //When the button is clicked, delete the entry the button relates to
      delButton.addEventListener("click", () => {
        this.deleteEntry(i);
      });

      cell.appendChild(delButton);
      row.appendChild(cell);
    });
  };

  //Delete entry i from the array & visually remove from the table
  deleteEntry = (i) => {
    const self = this; //Used for the child function

    console.log(`EateriesCMS: Deleting element ${i} from the database.`);

    //Creates a DELETE request, sends the delete request
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `/foodReq/${this.state.details[i]._id}`, true);
    xhr.send();

    //If the state of the request changes, call processRequest()
    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
      //The request has completed
      if (xhr.readyState === 4) {
        //The request was successful
        if (xhr.status === 200) {
          console.log(
            "EateriesCMS: An element deleted successfully from the database!"
          );

          //Clear and redraw the table
          document.getElementById("eateriesInfo").innerHTML = "";
          self.componentDidMount();
        }
        //The request was unsuccessful
        else {
          console.error("EateriesCMS: An error occurred, nothing was deleted.");
        }
      }
    }
  };

  //Edit entry i in the array
  editEntry = (i) => {
    console.log(`Edit entry ${i}`);
  };

  addEntry = () => {
    console.log(`Add new entry!`);
  };

  render() {
    // Switch the date information to readable form
    return (
      <div>
        <h1>Contact Information</h1>
        <table id="eateriesInfo" border="1"></table>
        <p id="message"></p>
      </div>
    );
  }
}

export default AdminCheckFood;
