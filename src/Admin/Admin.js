//This code was written by Yutian Chen.

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./css/Admin.css";

// Functional page
import AdminMenu from "./functions/AdminMenu";
import AdminLookupUser from "./functions/AdminLookupUser";
import AdminIndex from "./functions/AdminIndex";
import AdminCheckContact from "./functions/AdminCheckContact";
import AdminCheckFood from "./functions/AdminCheckFood";

// Authentication
import Login from "./Login";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        type: "",
      },
    };
  }

  render() {
    const { url } = this.props.match;

    // Get the login info from local storage
    const item = localStorage.getItem("userInfo");
    const user = JSON.parse(item);
    const now = new Date();
    let loggedIn = false;

    if (user) {
      if (user.user === "admin" && user.password === "12345678") {
        // Check if the login record is out of date (over 10 min)
        if (now.getTime() < user.expiry) {
          loggedIn = true;
        }
      }
    }

    if (!loggedIn) {
      //Show the login page if the login has expired (10 minutes)
      return (
        <div>
          {/*Set's the route for the login and redirects to the route*/}
          <Route path={`${url}/login`} component={Login} />
          <Redirect to={`${url}/login`} />
        </div>
      );
    } //Show the main
    else {
      return (
        <div className="mainContainer">
          <div className="navContainer">
            <AdminMenu history={this.props.history} />
          </div>
          <div className="infoContainer">
            <Switch>
              <Route exact path={url} component={AdminIndex} />
              <Route path={`${url}/LookupUser`} component={AdminLookupUser} />
              <Route
                path={`${url}/CheckContact`}
                component={AdminCheckContact}
              />
              <Route path={`${url}/CheckFood`} component={AdminCheckFood} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default Admin;
