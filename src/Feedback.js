import React from "react";
import "./css/Feedback.css";
import Header from "./Header";
import Footer from "./Footer";

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div> This is the Feedback page </div>

        <Footer />
      </div>
    );
  }
}

export default Feedback;
