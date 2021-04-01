import React from "react"; //We're writing React code. Duh.
import "./Cupboard.css"; //Style sheet
import Header from "../Header/Header"; //The header of the page
import Footer from "../Footer/Footer"; //The footer of the page

class Cupboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Test situation</h1>
        <Footer />
      </div>
    );
  }
}

export default Cupboard;
