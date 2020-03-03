import React from "react";
import "./css/Food.css";
import Header from "./Header";
import Footer from "./Footer";

class Food extends React.Component {
  constructor() {
    super();

    this.leftSwipe = this.onClickBack.bind(this);
    this.rightSwipe = this.onClickForward.bind(this);

    const food0 = {
      image: require("./resource/placeholder0.png"),
      name: "Example 0",
      address: "Near hospital 0, BI0 000",
      type: "cafe 0",
      price: "£example 0",
      link: "example.com"
    };

    const food1 = {
      image: require("./resource/placeholder1.png"),
      name: "Example 1",
      address: "Near hospital 1, BI1 111",
      type: "cafe 1",
      price: "£example 1",
      link: "example.com"
    };

    const food2 = {
      image: require("./resource/placeholder2.png"),
      name: "Example 2",
      address: "Near hospital 2, BI2 222",
      type: "cafe 2",
      price: "£example 2",
      link: "example.com"
    };

    this.state = {
      index: 1,
      foodList: [food0, food1, food2]
    };
  }

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

  render() {
    return (
      <div>
        <Header />
        <br />
        <br />

        <div class="buttonRow">
          <button class="imgButton" onClick={this.onClickBack}>
            {"<="}
          </button>

          <img
            src={this.state.foodList[this.state.index].image}
            class="picture"
            alt=""
          />

          <button class="imgButton" onClick={this.onClickForward}>
            {"=>"}
          </button>

          <b>
            <p class="title">Name</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index].name}</p>
          <b>
            <p class="title">Address</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index].address}</p>

          <b>
            <p class="title">Type</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index].type}</p>
          <b>
            <p class="title">Price</p>
          </b>
          <p class="content">{this.state.foodList[this.state.index].price}</p>

          <b>
            <p class="title">External Link</p>
          </b>
          <a href={this.state.foodList[this.state.index].link}>
            <p class="content">{this.state.foodList[this.state.index].link}</p>
          </a>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Food;
