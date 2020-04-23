//This page was written by Wenzheng Shan and refactored by Lawrence Warren.

import React from "react";
import "./css/MainPage.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { grey as matGrey } from "@material-ui/core/colors";
import Header from "./Header";
import Footer from "./Footer";

const MainButton = withStyles({
  root: {
    fontSize: "2.5vw",
    boxShadow: "none",
    textTransform: "none",
    outline: "none",
    fontWeight: "bold",
    fontFamily: "Georgia",
    height: "15vw",
    width: "25vw",
    backgroundColor: matGrey[500],
    borderRadius: "8vw",
    "&:hover": {
      backgroundColor: matGrey[700],
    },
  },
})(Button);

const FoodContactMarginStyle = makeStyles(() => ({
  margin: {
    marginRight: "3vw",
  },
}));

const AccommodationFeedBackMarginStyle = makeStyles(() => ({
  margin: {
    marginLeft: "3vw",
  },
}));

const CharityMarginStyle = makeStyles(() => ({
  margin: {
    marginRight: "3vw",
    marginTop: "2.5vw",
    marginBottom: "2.5vw",
  },
}));

const AboutMarginStyle = makeStyles(() => ({
  margin: {
    marginLeft: "3vw",
    marginTop: "2.5vw",
    marginBottom: "2.5vw",
  },
}));

function MainPage() {
  const FCMargin = FoodContactMarginStyle();
  const AFMargin = AccommodationFeedBackMarginStyle();
  const CMargin = CharityMarginStyle();
  const AMargin = AboutMarginStyle();

  return (
    <div>
      <Header />

      <div className="banner" id="introductionBanner">
        {" "}
        Introduction:{" "}
      </div>

      {/*Info block 1 */}

      <div className="infoBox">
        <img
          src={require("./resource/mainPage/Ava.jpg")}
          alt="Ava on holiday."
        />

        <div>
          <h1>The history of Ava's Angels</h1>

          <p>
            Ava was a perfectly healthy 3 year old girl, who unexpectedly fell
            ill while on holiday in the Maldives in March 2017. Ava and her
            parents had had a fantastic holiday and were about to fly home to
            share their memories. Tragically, Ava had contracted a form of
            Glandular fever, known as the Epstein Barr Virus, which impacted her
            brain after a series of incredibly unlikely complications. All
            options were exhausted over a series of months to give Ava the best
            possible chance of recovery. Sadly, Ava passed away at home with her
            parents after a long battle.
            <br />
            <br />
            Inspired by Ava, and wanting to help the families of other children
            in similar circumstances, Ava's Angels was established in March 2018
            to provide support to families of critically ill children during
            stays in hospital ICU units, helping them during the difficult
            process that is caring for a child in ICU.
          </p>
        </div>
      </div>

      {/*Info block 2 */}

      <div className="infoBox">
        <div>
          <h1>The goals of this terminal</h1>

          <ul>
            <li>
              Providing information about services available to families with
              sick children.
            </li>
            <li>
              Providing a relief of suffering for sick children by providing
              emotional support.
            </li>
            <li>
              Enabling families to visit, spend time with and care for their
              sick children.
            </li>
          </ul>
          <p>
            This web app focuses on providing support to parents of children in
            Intensive Care at a Birmingham hospital. We wish to display
            information to parents that are staying in or around the hospital
            with information such as the eateries and accommodation available to
            them, more detailed information about the charity, hospital
            facilities and general support information, and how they can leave
            feedback and get involved.
          </p>
        </div>

        <img
          src={require("./resource/mainPage/AAIntroduction.jpg")}
          alt="Avas's Angels: Helping Families with Sick Children."
        />
      </div>

      <div className="banner" id="exploreBanner">
        {" "}
        Explore:{" "}
      </div>

      {/* The buttons start here! */}
      <div className="buttonContainer">
        {/*Button row 1*/}
        <div>
          <a href="/Food" className="link">
            <MainButton
              variant="contained"
              color="primary"
              id="foodButton"
              className={FCMargin.margin}
            >
              Eateries
            </MainButton>
          </a>

          <a href="/Accommodation" className="link">
            <MainButton
              variant="contained"
              color="primary"
              className={AFMargin.margin}
              id="accomButton"
            >
              Accommodation
            </MainButton>
          </a>
        </div>

        {/*Button row 2 (with picture)*/}
        <div>
          <a href="/Charity" className="link">
            <MainButton
              variant="contained"
              color="primary"
              id="charityButton"
              className={CMargin.margin}
            >
              Charities
            </MainButton>
          </a>

          <img
            src={require("./resource/mainPage/AAAction.jpg")}
            className="button_image"
            alt="ava_activity"
          />

          <a href="/About" className="link">
            <MainButton
              variant="contained"
              color="primary"
              id="aboutButton"
              className={AMargin.margin}
            >
              About
            </MainButton>
          </a>
        </div>

        {/*Button row 3*/}
        <div>
          <a href="/Contact" className="link">
            <MainButton
              variant="contained"
              color="primary"
              id="contactButton"
              className={FCMargin.margin}
            >
              Contact
            </MainButton>
          </a>
          <a href="/Feedback" className="link">
            <MainButton
              variant="contained"
              color="primary"
              id="feedbackButton"
              className={AFMargin.margin}
            >
              Feedback
            </MainButton>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
