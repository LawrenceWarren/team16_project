import React from "react";
import "./css/Food.css";
import Header from "./Header";
import Footer from "./Footer";

var thePic =
  "https://www.bunkwings.com/wp-content/uploads/2015/07/bunk-cocktails-and-wings-nottingham172.jpg";

class Food extends React.Component {
  setPicture = val => {
    {
      thePic = val;
    }
  };

  leftSwipe = () => {
    //document.getElementById('picture').src=
    //"https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg";
    setPicture(
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg"
    );
  };

  rightSwipe = () => {
    //document.getElementById("picture").src=
    //"https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg";
    setPicture(
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg"
    );
  };

  render() {
    return (
      <div>
        <Header />
        <br />
        <br />

        <div class="buttonrow">
          <button class="left-button" onclick={this.rightSwipe()}>
            {"<"}
          </button>

          <img id="picture" src={thePic} class="picture" />

          <button class="right-button" onclick={this.leftSwipe()}>
            {">"}
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
