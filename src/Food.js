import React from "react";
import "./css/Food.css";
import Header from "./Header";
import Footer from "./Footer";

class Food extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />

        <div> This is the Food page. Welcome!</div>

        <Footer />
      </div>
    );
  }
}

var thePic =
  "https://www.bunkwings.com/wp-content/uploads/2015/07/bunk-cocktails-and-wings-nottingham172.jpg";

function setPicture(val) {
  {
    thePic = val;
  }
}

function leftSwipe() {
  //document.getElementById('picture').src=
  //"https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg";
  setPicture(
    "https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg"
  );
}

function rightSwipe() {
  //document.getElementById("picture").src=
  //"https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg";
  setPicture(
    "https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg"
  );
}

export default Food;
