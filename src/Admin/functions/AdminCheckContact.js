import React from "react";
import "../css/subPage.css";

class AdminCheckContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          _id: 0,
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
    if (this.state.details.length) {
      this.buildTableHeader(); //Draw the top row of the table
      this.buildTableBody(); //Draw the body of the table
    } else {
      //Leave a notice saying no data could be fetched
      document.getElementById("message").innerText =
        "No contact information could be fetched from the database!";
    }
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

  //Builds the body of the table
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
  deleteEntry = async (i) => {
    const self = this; //Used for the child function

    console.log(`ContactCMS: Deleting element ${i} from the database.`);

    //Creates a DELETE request, sends the delete request
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `/contactReq/${this.state.details[i]._id}`, true);
    xhr.send();

    //If the state of the request changes, call processRequest()
    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
      //The request has completed
      if (xhr.readyState === 4) {
        //The request was successful
        if (xhr.status === 200) {
          console.log(
            "ContactCMS: An element deleted successfully from the database!"
          );

          //Clear and redraw the table
          document.getElementById("contactInfo").innerHTML = "";
          self.componentDidMount();
        }
        //The request was unsuccessful
        else {
          console.log("ContactCMS: An error occurred, nothing was deleted.");
        }
      }
    }
  };

  //Render!
  render() {
    return (
      <div>
        <h1>Contact Information</h1>
        <table id="contactInfo" border="1"></table>
        <p id="message"></p>
      </div>
    );
  }
}

export default AdminCheckContact;
