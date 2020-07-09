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
      canCheck: false,
      loggedIn: false,
      fetchedPassword: false,
      fetchedUsername: false,
    };
  }

  //When the page renders
  componentDidMount() {
    this.setState({ canCheck: false });
    this.setState({ loggedIn: false });
    this.fetchFromServer();

    // Get the login info from local storage
    //TODO: stop this being based on local storage
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const now = new Date();

    if (user && now.getTime() < user.expiry) {
      if (
        user.user === this.state.fetchedUsername &&
        user.password === this.state.fetchedPassword
      ) {
        this.setState({ loggedIn: true });
      }
    }

    this.setState({ canCheck: true });
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
      this.state.loggedIn = false;
    } catch (err) {
      console.error("LoginCMS: " + err);
    }
  }

  render() {
    const { url } = this.props.match;

    /*jshint ignore:start */
    if (this.state.fetchedPassword && this.state.fetchedUsername) {
      {
        console.log("I made it mum");
        /*Show a ticker? */
      }
    } else if (!this.state.loggedIn && this.state.canCheck) {
      //Show the login page if the login has expired (10 minutes)

      return (
        <div>
          {/*Set's the route for the login and redirects to the route*/}
          <Route path={`${url}/login`} component={Login} />
          <Redirect to={`${url}/login`} />
        </div>
      );
    } //Show the main
    else if (this.state.loggedIn) {
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
