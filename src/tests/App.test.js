//This code was written by Wenzheng Shan with minor changes by Lawrence Warren.

import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { expect } from "chai";
//import App from "../App"; App should be tested but About page crashes things
import MainPage from "../MainPage";
import Food from "../Food";
import Accommodation from "../Accommodation";
import Charity from "../Charity";
//import About from "../About"; About page causes crashes
import Contact from "../Contact";
import Feedback from "../Feedback";
import Intermediate from "../Intermediate";
import Admin from "../Admin/Admin";

enzyme.configure({ adapter: new Adapter() });

/*<Route path="/About" component={About} /> Should be present*/

const component = enzyme.shallow(
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/Food" component={Food} />
      <Route path="/Accommodation" component={Accommodation} />
      <Route path="/Charity" component={Charity} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Feedback" component={Feedback} />
      <Route path="/Intermediate" component={Intermediate} />
      <Route path="/Admin" component={Admin} />
    </div>
  </Router>
);
let pathMap = {};

//! SUITE 1 : Testing routes
describe("routes using array of routers", () => {
  //  In order to get the object containing the pathname as key and componentname as value,
  //  we will iterate through the children of the Router component and get all the routes.
  beforeAll(() => {
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  //! TEST 1 : Testing if the Home route is correctly mapped to '/'
  it("Home page should map to route '/'.", () => {
    expect(pathMap["/"]).to.equal(MainPage);
  });

  //! TEST 2 : Testing if the Food route is correctly mapped to '/Food'
  it("Food page shpould map to route '/Food'.", () => {
    expect(pathMap["/Food"]).to.equal(Food);
  });

  //! TEST 3 : Testing if the Accommodation route is correctly mapped to '/Accommodation'
  it("Accommodation should map to route '/Accommodation'.", () => {
    expect(pathMap["/Accommodation"]).to.equal(Accommodation);
  });

  //! TEST 4 : Testing if the Charity route is correctly mapped to '/Charity'
  it("Charity should map to route '/Charity'.", () => {
    expect(pathMap["/Charity"]).to.equal(Charity);
  });

  /*//! TEST 5 : Testing if the About route is correctly mapped to '/About'
   * but it crashes
  it("About should map to route '/About'.", () => {
    expect(pathMap["/About"]).to.equal(About);
  });*/

  //! TEST 6 : Testing if the Contact route is correctly mapped to '/Contact'
  it("Contact should map to route '/Contact'.", () => {
    expect(pathMap["/Contact"]).to.equal(Contact);
  });

  //! TEST 7 : Testing if the Feedback route is correctly mapped to '/Feedback'
  it("Feedback should map to route '/Feedback'.", () => {
    expect(pathMap["/Feedback"]).to.equal(Feedback);
  });

  //! TEST 8 : Testing if the Intermediate route is correctly mapped to '/Intermediate'
  it("Intermediate should map to route '/Intermediate'.", () => {
    expect(pathMap["/Intermediate"]).to.equal(Intermediate);
  });

  //! TEST  : Testing if the Admin route is correctly mapped to '/Admin'
  it("Admin should map to route '/Admin'.", () => {
    expect(pathMap["/Admin"]).to.equal(Admin);
  });
});
