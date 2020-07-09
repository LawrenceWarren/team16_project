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
      details: [],
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
      this.state.details = details;
    } catch (err) {
      console.error("LoginCMS: " + err);
    }
  }

  render() {
    const { url } = this.props.match;

    // Get the login info from local storage
    //TODO: stop this being based on local storage
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const now = new Date();
    let loggedIn = false;

    //console.log(`user.user : ${user.user}`);
    //console.log(`user.password : ${user.password}`);
    //console.log(`user.expiry : ${user.expiry}`);
    //console.log(`this.state.fetchedPassword : ${this.state.fetchedPassword}`);
    //console.log(`this.state.fetchedUsername : ${this.state.fetchedUsername}`);

    if (user && now.getTime() < user.expiry) {
      if (
        user.user === this.state.details[0].fetchedUsername &&
        user.password === this.state.details[0].fetchedPassword
      ) {
        loggedIn = true;
      }
    }

    if (!loggedIn) {
      //Show the login page if the login has expired (10 minutes)
      /*jshint ignore:start */
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
      /*jshint ignore:end */
    }
  }
}

export default Admin;
