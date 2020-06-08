//This code was written by Yutian Chen, with small changes by Lawrence Warren.

import React from "react";

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

  componentDidMount = async () => {
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

    //Putting into table

    var cell0 = document.createElement("td");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var row = document.createElement("tr");
    document.getElementById("contactInfo").appendChild(row);

    //Adding the firstname title
    cell0.appendChild(document.createTextNode("First Name"));
    row.appendChild(cell0);
    //Adding the lastname title
    cell1.appendChild(document.createTextNode("Last Name"));
    row.appendChild(cell1);
    //Adding the email title
    cell2.appendChild(document.createTextNode("Email Address"));
    row.appendChild(cell2);
    //adding the phone number title
    cell3.appendChild(document.createTextNode("Phone Number"));
    row.appendChild(cell3);
    //adding the message title
    cell4.appendChild(document.createTextNode("Message"));
    row.appendChild(cell4);
    //adding the delete button title
    cell5.appendChild(document.createTextNode("Delete"));
    row.appendChild(cell5);

    //For each element in the details
    this.state.details.forEach((contact) => {
      console.log(contact);

      cell0 = document.createElement("td");
      cell1 = document.createElement("td");
      cell2 = document.createElement("td");
      cell3 = document.createElement("td");
      cell4 = document.createElement("td");
      cell5 = document.createElement("td");
      row = document.createElement("tr");
      document.getElementById("contactInfo").appendChild(row);

      //Adding the firstname
      cell0.appendChild(document.createTextNode(contact.firstname));
      row.appendChild(cell0);
      //Adding the lastname
      cell1.appendChild(document.createTextNode(contact.lastname));
      row.appendChild(cell1);
      //Adding the email
      cell2.appendChild(document.createTextNode(contact.email));
      row.appendChild(cell2);
      //adding the phone number
      cell3.appendChild(document.createTextNode(contact.phoneNum));
      row.appendChild(cell3);
      //adding the message
      cell4.appendChild(document.createTextNode(contact.message));
      row.appendChild(cell4);
      //adding the delete button
      //TODO: add a delete button to the table
    });
  };

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
