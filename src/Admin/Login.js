//This code was written by Yutian Chen.

import React from "react";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    user: "", //The input username
    password: "", //The input password
    TTL: 600000, //The time to live for a login session (currently 10 minutes)
  };

  //Updates the state value to be equal to what is input in the input box
  handleChange = (event) => {
    const input = event.target; //The element where the input occurred
    this.setState({ [input.name]: input.value });
  };

  //Updates the state value to be equal to a hash of what is in the input box
  handleHashChange = (event) => {
    const input = event.target; //The element where the input occurred

    //TODO: hash input.value
    this.setState({ [input.name]: /*this.hash*/ input.value });
  };

  //Handles form submission
  handleFormSubmit = () => {
    //If the login check is successful
    if (this.loginCheck(this.state.user, this.state.password)) {
      var time = new Date().getTime() + this.state.TTL; //Creates a variable to represent the time the login session will expire

      //Define an object containing user info for the current login session
      const userInfo = {
        user: this.state.user,
        password: this.state.password,
        expiry: time,
      };

      //Save the user info
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      alert("username or password error!");
    }

    window.location.href = "/admin";
  };

  //Checks to see if the login is correct
  //TODO: handle some kind of user authentication from the cloud
  loginCheck(username, password) {
    if (username === "admin" && password === "12345678") {
      return true;
    } else {
      return false;
    }
  }

  //Render function
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User:{" "}
          <input
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <label>
          password:{" "}
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleHashChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }
}
