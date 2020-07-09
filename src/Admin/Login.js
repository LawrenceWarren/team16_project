//This code was written by Yutian Chen.

import React from "react";
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
  componentDidMount() {
    this.fetchFromServer();
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
      //TODO: currently saves details - needs to... not.
      const userInfo = {
        user: this.state.fetchedUsername,
        password: hashedPassword,
        expiry: new Date().getTime() + this.state.TTL,
      };

      //Save the user info
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      console.log(`${this.state.fetchedUsername} --- ${hashedPassword}`);
      alert("username or password error!");
    }

    window.location.href = "/admin";
  }

  //Checks to see if the login is correct
  loginCheck(hashedPassword) {
    if (
      this.state.typedUsername === this.state.fetchedUsername &&
      hashedPassword === this.state.fetchedPassword
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
      >
        <label>
          User:{" "}
          <input
            name="Username"
            value={this.state.typedUsername}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
        </label>
        <label>
          password:{" "}
          <input
            name="Password"
            type="password"
            value={this.state.typedPassword}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
    /* jshint ignore:end */
  }
}
