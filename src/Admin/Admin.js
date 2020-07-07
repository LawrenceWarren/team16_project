//This code was written by Yutian Chen.

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./css/Admin.css";

// Functional page
import Menu from "./functions/Menu";
import LookupUser from "./functions/LookupUser";
import CheckContact from "./functions/CheckContact";
import CheckFood from "./functions/CheckFood";
import CheckCharities from "./functions/CheckCharities";
import CheckFeedback from "./functions/CheckFeedback";
import CheckHotels from "./functions/CheckHotels";

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
            <Menu history={this.props.history} />
          </div>
          <div className="infoContainer">
            <Switch>
              <Route path={`${url}/LookupUser`} component={LookupUser} />
              <Route path={`${url}/CheckContact`} component={CheckContact} />
              <Route path={`${url}/CheckFood`} component={CheckFood} />
              <Route
                path={`${url}/CheckCharities`}
                component={CheckCharities}
              />
              <Route path={`${url}/CheckFeedback`} component={CheckFeedback} />
              <Route path={`${url}/CheckHotels`} component={CheckHotels} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default Admin;
