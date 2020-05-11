//These tests were written by Wenzheng Shan with minor changes made by Lawrence Warren.

import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import MainPage from "../MainPage";
enzyme.configure({ adapter: new Adapter() });
const mainPage = enzyme.shallow(<MainPage />);

//! SUITE 1 : Testing the structure of the page
describe("Structure tests: ", function () {
  //! TEST 1 : The introduction banner should render
  it("Detecting the introduction banner.", function () {
    const introduce = mainPage.find("#introductionBanner");
    expect(introduce.text()).to.equal(" Introduction: ");
  });

  //!TEST 2 : The explore banner should render.
  it("Detecting the explore banner.", function () {
    const explore = mainPage.find("#exploreBanner");
    expect(explore.text()).to.equal(" Explore: ");
  });
});

//! SUITE 2 : Detecting the correct number of buttons
describe("Button tests: ", function () {
  //!TEST 1 : Six buttons should be detected.
  it("Detect the 6 buttons on the page.", function () {
    const button = mainPage.find(".buttonContainer");
    const link = button.find("a");
    expect(link.length).to.equal(6);
  });

  //!TEST 2 : Mocking buttons clicks.
  it("All the buttons should have an associated click functionality.", () => {
    let times = mainPage.find("a").length;

    //If the buttons are not present or ".simulate("click")" fails, the test will fail.
    mainPage.find("#foodButton").simulate("click");
    times--;
    mainPage.find("#accomButton").simulate("click");
    times--;
    mainPage.find("#charityButton").simulate("click");
    times--;
    mainPage.find("#aboutButton").simulate("click");
    times--;
    mainPage.find("#feedbackButton").simulate("click");
    times--;
    mainPage.find("#contactButton").simulate("click");
    times--;
    //6 clicks should work.
    expect(times).to.equal(0);
  });
});
