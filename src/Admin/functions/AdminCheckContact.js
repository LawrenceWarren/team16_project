//This code was written by Yutian Chen, with small changes by Lawrence Warren.

import React from "react";
import "../css/subPage.css";

class AdminCheckContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          currentTime: "",
          firstname: "",
          lastname: "",
          email: "",
          phoneNum: "",
          message: "",
        },
      ],
    };
  }

  //Runs when the page loads
  componentDidMount = async () => {
    await this.fetchFromServer(); //Calls information from the server asynchronously
    this.buildTableHeader();
    this.buildTableBody();
  };

  //Fetches the contact information from the database
  fetchFromServer = async () => {
    //Fetching from server
    console.log("ContactCMS: Fetching from server...");
    try {
      const res = await fetch("/contactReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const info = await res.json();
      this.setState({ details: info });
      console.log("ContactCMS: Data from the server has been received!");
    } catch (err) {
      console.error("ContactCMS: " + err);
    }
  };

  //Builds the first row of the tables
  buildTableHeader = () => {
    //Variables used
    var row, cell;

    //Creates a new row, appends that row to the table
    row = document.createElement("tr");
    document.getElementById("contactInfo").appendChild(row);

    //Creates a new cell (firstname), populates the cell, appends the cell to the row
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("First Name"));
    row.appendChild(cell);

    //Creates a new cell (lastname), populates the cell, appends the cell to the row
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Last Name"));
    row.appendChild(cell);

    //Creates a new cell (email address), populates the cell, appends the cell to the row
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Email Address"));
    row.appendChild(cell);

    //Creates a new cell (phone number), populates the cell, appends the cell to the row
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Phone Number"));
    row.appendChild(cell);

    //Creates a new cell (message), populates the cell, appends the cell to the row
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Message"));
    row.appendChild(cell);

    //Creates a new cell (delete button), populates the cell, appends the cell to the row
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Delete"));
    row.appendChild(cell);
  };

  buildTableBody = () => {
    //variables used
    var row, cell;

    //Loops through each element in the array `state.details`
    this.state.details.forEach((contact, i) => {
      //Defines row as a new row, and appends it to the table
      row = document.createElement("tr");
      document.getElementById("contactInfo").appendChild(row);

      //Adding the firstname of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(contact.firstname));
      row.appendChild(cell);

      //Adding the lastname of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(contact.lastname));
      row.appendChild(cell);

      //Adding the email of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(contact.email));
      row.appendChild(cell);

      //Adding the phone number of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(contact.phoneNum));
      row.appendChild(cell);

      //Adding the message of the current element to the row
      cell = document.createElement("td");
      cell.appendChild(document.createTextNode(contact.message));
      row.appendChild(cell);

      //Adding the delete button of the current element to the row
      cell = document.createElement("td");

      var delButton = document.createElement("button");

      delButton.innerText = "Delete entry " + i;

      delButton.addEventListener("click", (event) => {
        this.deleteEntry(i);
      });

      cell.appendChild(delButton);
      row.appendChild(cell);
    });
  };

  deleteEntry = (i) => {
    console.log(`ContactCMS: Deleting element ${i} from the database.`);
  };

  //Render!
  render() {
    return (
      <div>
        <h1>Contact Information</h1>
        <table id="contactInfo" border="1"></table>
      </div>
    );
  }
}

export default AdminCheckContact;
