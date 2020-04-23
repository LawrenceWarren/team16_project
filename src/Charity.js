//This code was written by Lawrence Warren and copy-pasted by Ben Smith.

import React from "react";
import "./css/Charity.css";
import Header from "./Header";
import Footer from "./Footer";
import { Swipeable } from "react-swipeable";

class Charity extends React.Component {
  constructor() {
    super(); //Does something ??

    this.leftSwipe = this.onClickBack.bind(this); //Binds the onClickBack function on page loading
    this.rightSwipe = this.onClickForward.bind(this); //Binds the onClickFroward function on page load

    //State property
    this.state = {
      index: 0, //Used for indexing the array
      charityList: [
        {
          charityId: 0,
          charity_name: "",
          charity_phone: "",
          charity_email: "",
          charity_weblink: "",
          charity_introduce: "",
          charity_image: "",
        },
      ],
    };
  }

  //Handle swipes forward
  //Sets the state of index to increase by 1,
  // or wrap around to 0
  onClickForward = () => {
    if (this.state.index + 1 === this.state.charityList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  //Handles swipe back
  //Sets the state of index to decrease by 1,
  //or wrap around to the largest value
  onClickBack = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.charityList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  //Calls the server upon page loading
  async componentDidMount() {
    console.log("Charity: Fetching from server...");
    try {
      const res = await fetch("/charityReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const charity = await res.json();
      this.setState({ charityList: charity });
      console.log("Charity: Data from the server has been received!");
    } catch (err) {
      console.error("Charity: " + err);
    }
  }

  //!-------------!//
  //!Render method!//
  //!-------------!//
  render() {
    //!DOM
    return (
      <div className="mainDiv">
        <Header />

        <p className="banner">
          {" "}
          Below are a selection of local charities with links to their webpages{" "}
        </p>

        {/*Creates a swipeable div element, which allows for touch control
         * However, swipeable does not allow for styling, hence the nested div*/}
        <Swipeable
          onSwipedLeft={this.onClickBack}
          onSwipedRight={this.onClickForward}
        >
          <div className="contentContainer">
            {/*On screen indications for swiping */}
            <img
              src={require("./resource/food/swipeLeft.png")}
              className="swipeLeft"
              onClick={this.onClickBack}
              alt="Upon pressing, you move backwards through the eateries."
            />
            <img
              src={require("./resource/food/swipeRight.png")}
              className="swipeRight"
              onClick={this.onClickForward}
              alt="Upon pressing, you move forwards through the eateries."
            />

            <img
              src={this.state.charityList[this.state.index]?.charity_image}
              className="picture"
              alt=""
            />

            <b>
              <p className="title">Name</p>
            </b>
            <p id="titleID" className="content">
              {this.state.charityList[this.state.index]?.charity_name}
            </p>

            <b>
              <p className="title">Phone</p>
            </b>
            <p id="phoneID" className="content">
              {this.state.charityList[this.state.index]?.charity_phone}
            </p>

            <b>
              <p className="title">Email</p>
            </b>
            <p id="emailID" className="content">
              {this.state.charityList[this.state.index]?.charity_email}
            </p>
            <b>
              <p className="title">Introduction</p>
            </b>
            <p id="introductionID" className="content">
              {this.state.charityList[this.state.index]?.charity_introduce}
            </p>

            <b>
              <p className="title">Weblink</p>
            </b>
            <a href={this.state.charityList[this.state.index]?.charity_weblink}>
              <p id="weblinkID" className="content">
                {this.state.charityList[this.state.index]?.charity_weblink}
              </p>
            </a>
          </div>
        </Swipeable>

        <Footer />
      </div>
    );
  }
}

export default Charity;
