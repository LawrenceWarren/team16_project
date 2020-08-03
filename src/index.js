//This is boilerplate code. Nobody wrote this. Thanks create react app.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Food from "./FoodPage/Food";
import Accommodation from "./AccommodationPage/Accommodation";
import Charity from "./CharityPage/Charity";
import Cupboard from "./CupboardPage/Cupboard";
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Feedback from "./FeedbackPage/Feedback";
import Intermediate from "./IntermediatePage/Intermediate";
import Admin from "./Admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";

//import App from "./App";

// Backstage style
import "antd/dist/antd.css";

//!This is the entry point for the web-code, MAKE CHANGES ON A BRANCH
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/Food" component={Food} />
      <Route path="/Accommodation" component={Accommodation} />
      <Route path="/Charity" component={Charity} />
      <Route path="/Cupboard" component={Cupboard} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Feedback" component={Feedback} />
      <Route path="/Intermediate" component={Intermediate} />
      <Route path="/Admin" component={Admin} />
    </div>
  </Router>,

  //<App />,
  document.getElementById("root")
);
