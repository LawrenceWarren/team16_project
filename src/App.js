//This code was written by Wenzheng Shan, with small changes by Lawrence Warren and Yutian Chen.

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Food from "./FoodPage/Food";
import Accommodation from "./AccommodationPage/Accommodation";
import Charity from "./CharityPage/Charity";
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Feedback from "./FeedbackPage/Feedback";
import Intermediate from "./Intermediate";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./Admin/Admin";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route path="/Food" component={Food} />
          <Route path="/Accommodation" component={Accommodation} />
          <Route path="/Charity" component={Charity} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Feedback" component={Feedback} />
          <Route path="/Intermediate" component={Intermediate} />
          <Route path="/Admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
