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
      fetchedPassword: false,
      fetchedUsername: false,
    };
  }

  render() {
    const fetchedInfo = JSON.parse(localStorage.getItem("fetchedInfo"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const now = new Date();
    let loggedIn = false;

    if (
      userInfo &&
      now.getTime() < userInfo.expiry &&
      userInfo.user === fetchedInfo.fetchedUsername &&
      userInfo.password === fetchedInfo.fetchedPassword
    ) {
      loggedIn = true;
    }

    const { url } = this.props.match;

    /*jshint ignore:start */
    if (!loggedIn) {
      return (
        <div>
          {/*Set's the route for the login and redirects to the route*/}
          <Route path={`${url}/login`} component={Login} />
          <Redirect to={`${url}/login`} />
        </div>
      );
    } //Show the main
    else if (loggedIn) {
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
      /*jshint ignore:end */
    }
  }
}

export default Admin;
