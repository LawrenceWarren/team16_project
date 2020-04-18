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

const FoodContactMarginStyle = makeStyles((_theme) => ({
  margin: {
    marginRight: "3vw",
  },
}));

const AccomFeedBackMarginStyle = makeStyles((_theme) => ({
  margin: {
    marginLeft: "3vw",
  },
}));

const CharityMarginStyle = makeStyles((_theme) => ({
  margin: {
    marginRight: "5vw",
    marginBottom: "5vw",
  },
}));

const AboutMarginStyle = makeStyles((_theme) => ({
  margin: {
    marginLeft: "5vw",
    marginBottom: "5vw",
  },
}));

function MainPage() {
  const FCMargin = FoodContactMarginStyle();
  const AFMargin = AccomFeedBackMarginStyle();
  const CMargin = CharityMarginStyle();
  const AMargin = AboutMarginStyle();

  return (
    <div>
      <Header />

      <div className="banner"> Introduction: </div>

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
            ill on a holiday in the Maldives in March 2017. Ava and her parents
            had had a fantastic holiday and were about to fly home to share
            their memories. Tragically, Ava had contracted a form of Glandular
            fever, known as the Epstein Barr Virus, which impacted her brain
            after a series of incredibly unlikely complications. All options
            were exhausted over a series of months to give Ava the best possible
            chance of recovery. Sadly, Ava passed away at home with her parents
            after a long battle to keep her with them.
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
          <h1>Ava's Angels In Action</h1>

          <p>The goals of Ava's Angels include:</p>
          <ul>
            <li>Helping families with sick children</li>
            <li>
              Providing relief of suffering among children being cared for in
              hospital by providing items, services and emotional support
            </li>
            <li>
              Enabling families to visit, spend quality time with and care for
              their sick children
            </li>
          </ul>
          <p>
            This web app focuses on providing support to parents of children in
            ICUs at a Birmingham hospital. This wish to display information to
            parents that are staying at the hospital while their children are
            under treatment. This also provide information about local services,
            hospital facilities and general support information.
          </p>
        </div>

        <img
          src={require("./resource/mainPage/AAIntroduction.jpg")}
          alt="Avas's Angels: Helping Families with Sick Children."
        />
      </div>

      <div className="banner"> Explore: </div>

      {/* The buttons start here! */}

      <div className="exploreButton">
        <div>
          <a href="/Food" className="link">
            <MainButton
              variant="contained"
              color="primary"
              className={FCMargin.margin}
            >
              Food
            </MainButton>
          </a>
          <a href="/Accommodation" className="link">
            <MainButton
              variant="contained"
              color="primary"
              className={AFMargin.margin}
            >
              Accommodation
            </MainButton>
          </a>
        </div>
        <div>
          <a href="/Charity" className="link">
            <MainButton
              variant="contained"
              color="primary"
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
              className={AMargin.margin}
            >
              About
            </MainButton>
          </a>
        </div>
        <div>
          <a href="/Contact" className="link">
            <MainButton
              variant="contained"
              color="primary"
              className={FCMargin.margin}
            >
              Contact
            </MainButton>
          </a>
          <a href="/Feedback" className="link">
            <MainButton
              variant="contained"
              color="primary"
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
