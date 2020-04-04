import React from "react";
import "./css/Food.css"; //Style sheet
import Header from "./Header"; //The header of the page
import Footer from "./Footer"; //The footer of the page
import { Swipeable } from "react-swipeable"; //Used to create a swipeable DOM element

class Food extends React.Component {
  constructor() {
    super(); //Does something ??

    this.leftSwipe = this.onClickBack.bind(this); //Binds the onClickBack function on page loading
    this.rightSwipe = this.onClickForward.bind(this); //Binds the onClickFroward function on page load

    //State property
    this.state = {
      index: 0, //Used for indexing the array
      foodList: [],
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
    fetch("http://localhost:4000/food/") //Fetch from the server
      .then((res) => res.json()) //JSONify the data
      .then((res) => this.setState({ foodList: res })) //Pass the JSON into state
      .catch((err) => err);
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
    console.log("Debug: " + this.state.foodList[this.state.index]?.name);

    //!DOM
    return (
      <div className="mainDiv">
        <Header />

        <p className="banner"> Eateries around the hospital </p>

        {/*Creates a swipeable div element, which allows for touch control
         * However, swipeable does not allow for styling, hence the nested div*/}
        <Swipeable
          onSwipedLeft={this.onClickBack}
          onSwipedRight={this.onClickForward}
        >
          <div className="contentContainer">
            <img
              src={this.state.foodList[this.state.index]?.image}
              className="picture"
              alt=""
            />

            <b>
              <p className="title">Name</p>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.name}
            </p>

            <b>
              <p className="title">Address</p>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.address}
            </p>

            <b>
              <p className="title">Type</p>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.type}
            </p>
            <b>
              <p className="title">Price</p>
            </b>
            <p className="content">
              {this.state.foodList[this.state.index]?.price}
            </p>

            <b>
              <p className="title">External Link</p>
            </b>
            <a href={this.state.foodList[this.state.index]?.link}>
              <p className="content">
                {this.state.foodList[this.state.index]?.link}
              </p>
            </a>
          </div>
        </Swipeable>

        <Footer />
      </div>
    );
  }
}

export default Food;
