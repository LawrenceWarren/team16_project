//This code was written by Yutian Chen.

import React from "react";
import "./css/login.css";

var Crypto = require("crypto-js");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedUsername: "",
      fetchedPassword: "",
      typedUsername: "", //The input username
      typedPassword: "", //The input password
      TTL: 600000, //The time to live for a login session (currently 10 minutes)
    };
  }

  //When the page renders
  async componentDidMount() {
    await this.fetchFromServer();
    await this.writeToStorage();
  }

  //Fetch data from the server - populate state
  async fetchFromServer() {
    try {
      const res = await fetch("/loginReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const details = await res.json();
      this.state.fetchedUsername = details[0].username;
      this.state.fetchedPassword = details[0].password;
    } catch (err) {
      console.error("LoginCMS: " + err);
    }
  }

  //Writes the saved credentials into storage
  async writeToStorage() {
    const fetchedInfo = {
      fetchedUsername: this.state.fetchedUsername,
      fetchedPassword: this.state.fetchedPassword,
    };

    //Save the user info
    localStorage.setItem("fetchedInfo", JSON.stringify(fetchedInfo));
  }

  //Updates the state value to be equal to what is input in the input box
  handleChange(event) {
    const input = event.target; //The element where the input occurred
    this.setState({ [`typed${input.name}`]: input.value });
  }

  //Handles form submission
  handleFormSubmit(event) {
    event.preventDefault();

    const hashedPassword = Crypto.SHA256(this.state.typedPassword).toString();

    //If the login check is successful
    if (this.loginCheck(hashedPassword)) {
      //Define an object containing user info for the current login session
      //TODO: remove the 10 minute timer thing
      const userInfo = {
        user: this.state.typedUsername,
        password: hashedPassword,
        expiry: new Date().getTime() + this.state.TTL,
      };

      //Save the user info
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      alert("username or password error!");
    }

    window.location.href = "/admin";
  }

  /**Checks the submitted credentials to see if they match the fetched user credentials
   * @param {String} hashedTypedPassword a hash of the typed password.
   */
  loginCheck(hashedTypedPassword) {
    if (
      this.state.typedUsername === this.state.fetchedUsername &&
      hashedTypedPassword === this.state.fetchedPassword
    ) {
      return true;
    } else {
      return false;
    }
  }

  //Render function
  render() {
    /* jshint ignore:start */
    return (
      <form
        onSubmit={(event) => {
          this.handleFormSubmit(event);
        }}
        autocomplete="on"
      >
        <label for="Username">Username:</label>

        <br />

        <input
          name="Username"
          id="Username"
          type="text"
          onChange={(event) => {
            this.handleChange(event);
          }}
        />

        <br />

        <label for="Password">Password:</label>

        <br />

        <input
          name="Password"
          id="Password"
          type="password"
          onChange={(event) => {
            this.handleChange(event);
          }}
        />

        <br />

        <button type="submit">Log In</button>
      </form>
    );
    /* jshint ignore:end */
  }
}
