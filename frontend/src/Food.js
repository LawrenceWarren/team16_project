import React from "react";
import "./css/Food.css";
import Header from "./Header";
import Footer from "./Footer";

class Food extends React.Component {
  constructor() {
    super();

    this.leftSwipe = this.onClickBack.bind(this);
    this.rightSwipe = this.onClickForward.bind(this);

    this.state = {
      index: 0,
      foodList: []
    };
  }

  //Handle button clicks forward and back
  //TODO: make work for swipes on screen
  onClickForward = () => {
    if (this.state.index + 1 === this.state.foodList.length) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  };
  onClickBack = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.foodList.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  //Calls the server upon page loading
  callServer() {
    fetch("http://localhost:4000/food/")
      .then(res => res.json())
      .then(res => this.setState({ foodList: res }))
      .catch(err => err);
  }

  //Mounts the callServer function upon page loading, calling it
  componentWillMount() {
    this.callServer();
  }

  //!-------------!
  //!Render method!
  //!-------------!
  render() {
    console.log(
      "Debug:\n" + JSON.stringify(this.state.foodList[this.state.index]?.name)
    );

    return (
      <div class="mainDiv">
        <Header />
        <br />
        <br />

        <button class="imgButton" onClick={this.onClickBack}>
          {"<="}
        </button>

        <div class="contentContainer">
          <img
            src={this.state.foodList[this.state.index]?.image}
            class="picture"
            alt=""
          />

          <b>
            <p class="title">Name</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index]?.name}</p>

          <b>
            <p class="title">Address</p>
          </b>
          <p class="content">
            {this.state.foodList[this.state.index]?.address}
          </p>

          <b>
            <p class="title">Type</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index]?.type}</p>
          <b>
            <p class="title">Price</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index]?.price}</p>

          <b>
            <p class="title">External Link</p>
          </b>
          <a href={this.state.foodList[this.state.index]?.link}>
            <p class="content">{this.state.foodList[this.state.index]?.link}</p>
          </a>
        </div>
        <button class="imgButton" onClick={this.onClickForward}>
          {"=>"}
        </button>

        <Footer />
      </div>
    );
  }
}

export default Food;
