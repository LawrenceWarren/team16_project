import React from "react";
import "./css/Food.css";
import Header from "./Header";
import Footer from "./Footer";

class Food extends React.Component {
  constructor() {
    super();

    this.leftSwipe = this.leftSwipe.bind(this);
    this.rightSwipe = this.rightSwipe.bind(this);

    const img0 = require("./resource/placeholder0.png");
    const img1 = require("./resource/placeholder1.png");
    const img2 = require("./resource/placeholder2.png");

    this.state = {
      index: 1,
      imgList: [img0, img1, img2]
    };
  }

  leftSwipe() {
    /*if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }*/

    this.setState({ index: 0 });
  }

  rightSwipe() {
    /*if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }*/

    this.setState({ index: 2 });
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <br />

        <div class="buttonrow">
          <button class="left-button" onclick={this.leftSwipe}>
            left
          </button>

          <img
            id="picture"
            src={this.state.imgList[this.state.index]}
            class="picture"
          />

          <button class="right-button" onclick={this.rightSwipe}>
            right
          </button>
        </div>

        <p class="content">content 1</p>
        <p class="content">content 2</p>
        <p class="content">content 3</p>
        <p class="content">content 4</p>
        <p class="content">content 5</p>

        <Footer />
      </div>
    );
  }
}

export default Food;
