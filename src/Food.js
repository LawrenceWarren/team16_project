import React from "react"; //We're writing React code. Duh.
import "./css/Food.css"; //Style sheet
import Header from "./Header"; //The header of the page
import Footer from "./Footer"; //The footer of the page
import { Swipeable } from "react-swipeable"; //Used to create a swipeable DOM element

class Food extends React.Component {
  constructor() {
    super(); //Does something ??

    this.leftSwipe = this.onClickBack.bind(this); //Binds the onClickBack function on page loading
    this.rightSwipe = this.onClickForward.bind(this); //Binds the onClickFroward function on page load

    /*
    State is populated with changing features of the page:
     * an array of eateries
     * an index for that array
    */
    this.state = {
      index: 0, //Used for indexing the array
      foodList: [
        //Food list
        {
          image: require("./resource/food/connectionFail.png"), //Default value
          name: "",
          address: "",
          type: "",
          price: "",
          link: "",
        },
      ],
    };
  }

  //Handle swipes forward
  //Sets the state of index to increase by 1,
  // or wrap around to 0
  onClickForward = () => {
    if (this.state.index + 1 === this.state.foodList.length) {
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
        index: this.state.foodList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  //Calls the server upon page loading
  callServer() {
    fetch("/foodReq") //Fetch from the server
      .then((res) => res.json()) //JSON-ify the data
      .then((res) => this.setState({ foodList: res })) //Pass the JSON into state
      .catch(
        (err) => err,
        () => console.log("There has been an error reading from DB!")
      ); //Catch errors
  }

  //Mounts the callServer function upon page loading, calling it
  componentDidMount() {
    this.callServer();
  }

  //!-------------!//
  //!Render method!//
  //!-------------!//
  render() {
    //Print for debugging purposes
    //!DOM
    return (
      <div className="mainDiv">
        <Header /> {/*The header component written by Steven*/}
        <p className="banner"> Eateries around the hospital </p>
        {/*Creates a swipeable div element, and binds the swipe handler functions to swipe events
         * However, swipeable does not allow for styling, hence the immediately nested div*/}
        <Swipeable
          onSwipedLeft={this.onClickBack}
          onSwipedRight={this.onClickForward}
        >
          {/*Styled content container, within which images and text appear*/}
          <div className="contentContainer">
            {/*On screen indications for swiping */}
            <img
              src={require("./resource/food/swipeLeft.png")}
              className="swipeLeft"
              onClick={this.onClickBack}
            />
            <img
              src={require("./resource/food/swipeRight.png")}
              className="swipeRight"
              onClick={this.onClickForward}
            />

            {/*Picture */}
            <img
              src={this.state.foodList[this.state.index]?.image}
              className="picture"
              alt=""
            />
            {/*Name */}
            <b>
              <u>
                <p className="title">Name</p>
              </u>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.name}
            </p>
            {/*Address*/}
            <b>
              <u>
                <p className="title">Address</p>
              </u>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.address}
            </p>
            {/*Type*/}
            <b>
              <u>
                <p className="title">Type</p>
              </u>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.type}
            </p>
            {/*Pricing*/}
            <b>
              <u>
                <p className="title">Price</p>
              </u>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.price}
            </p>
            {/*Link to site*/}
            <b>
              <u>
                <p className="title">External Link</p>
              </u>
            </b>
            <a href={this.state.foodList[this.state.index]?.link}>
              <p className="content">
                {this.state.foodList[this.state.index]?.link}
              </p>
            </a>
          </div>
        </Swipeable>
        <Footer /> {/*Footer component written by Steven*/}
      </div>
    );
  }
}

export default Food;
