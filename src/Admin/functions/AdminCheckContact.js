import React from "react";
import "../css/subPage.css";

class AdminCheckContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  //Runs when the page loads
  async componentDidMount() {
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
  }

  //Builds the first row of the tables
  buildTableHeader() {
    var row, cell, head, titles;

    titles = [
      "First name",
      "Last Name",
      "Email Address",
      "Phone Number",
      "Message",
      "Delete",
    ];

    //Creates a new row, appends that row to the table
    head = document.createElement("thead");
    row = document.createElement("tr");
    document.getElementById("contactInfo").appendChild(head);
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
    var row, cell, body, rowValues, self;

    self = this; //Used for function calls within objects
    body = document.createElement("tbody");
    document.getElementById("contactInfo").appendChild(body);

    /**Loops through each element in state.details,
     * and populates a new row in the table with
     *      the values from state.details        */
    this.state.details.forEach((contact, i) => {
      row = document.createElement("tr");
      body.appendChild(row);

      //Defines an array to store the values of the current element
      //of state.details, to be looped through
      rowValues = [
        contact.firstname,
        contact.lastname,
        contact.email,
        contact.phoneNum,
        contact.message,
        {
          innerText: "Delete entry",
          function: function (i) {
            self.deleteEntry(i);
          },
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
          button.addEventListener("click", () => {
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
    //Creates a DELETE request, sends the delete request
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `/contactReq/${this.state.details[i]._id}`, true);
    xhr.send();

    //If the state of the request changes, call processRequest()
    xhr.onreadystatechange = () => {
      this.processStateChange(xhr.readyState, xhr.status);
    };
  }

  /**Process's the state of our DELETE request, when it changes.
   * @param requestState the state of the request (4 means the request has completed)
   * @param httpStatus the returned httpStatus for the request
   */
  processStateChange(requestState, httpStatus) {
    //The request has completed successfully
    if (requestState === 4 && httpStatus === 200) {
      document.getElementById("contactInfo").innerHTML = ""; //Clear the table
      this.componentDidMount();
    } else if (httpStatus !== 200) {
      console.error("ContactsCMS: An error occurred, nothing was deleted.");
    }
  }

  //Render!
  render() {
    /* jshint ignore:start */
    return (
      <div>
        <h1>Contact Information</h1>
        <table id="contactInfo" border="1"></table>
        <p id="message"></p>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default AdminCheckContact;
