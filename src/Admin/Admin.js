//This code was written by Yutian Chen.

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./css/Admin.css";

// Functional page
import AdminMenu from "./functions/AdminMenu";
import AdminLookupUser from "./functions/AdminLookupUser";
import AdminIndex from "./functions/AdminIndex";
import AdminCheckContact from "./functions/AdminCheckContact";

// Authentication & jump configurations
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

    // Get the login info from local
    const item = localStorage.getItem("userInfo");
    const user = JSON.parse(item);
    const now = new Date();
    var isLogin = false;

    if (user) {
      if (user.user === "admin" && user.password === "12345678") {
        // Check if the login record is out of date (over 10 min)
        if (now.getTime() < user.expiry) {
          isLogin = true;
        }
      }
    }

    if (!isLogin) {
      // Redirct if is not login or out of date
      return (
        <div>
          <Route path={`${url}/Login`} component={Login} />
          <Redirect to={`${url}/Login`} />
        </div>
      );
    } else {
      return (
        <div>
          {
            <div className="admin_container">
              <div className="menuContainer">
                <AdminMenu history={this.props.history} />
              </div>
              <div className="nextContain">
                <Switch>
                  <Route exact path={url} component={AdminIndex} />
                  <Route
                    path={`${url}/LookupUser`}
                    component={AdminLookupUser}
                  />
                  <Route
                    path={`${url}/CheckContact`}
                    component={AdminCheckContact}
                  />
                </Switch>
              </div>
            </div>
          }
        </div>
      );
    }
  }
}

export default Admin;
