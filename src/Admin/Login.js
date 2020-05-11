//This code was written by Yutian Chen.

import React from "react";

export default class Login extends React.Component {
  state = {
    user: "",
    password: "",
    TTL: 6000000,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const now = new Date();
    var time = now.getTime() + this.state.TTL;

    // Set the expiry time of authentication
    // One login will expiry after 10 min
    const { user, password } = this.state;
    const userInfo = { user, password, expiry: time };

    if (this.loginCheck(user, password)) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      alert("username or password error!");
    }
    window.location.href = "/Admin";
  };

  loginCheck(username, password) {
    if (username === "admin" && password === "12345678") {
      return true;
    } else {
      return false;
    }
  }

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
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }
}
