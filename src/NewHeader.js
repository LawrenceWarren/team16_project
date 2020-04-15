import React from "react";
import { Router, Link } from "react-router-dom";
import "./css/NewHeader.css";

class NewHeader extends React.Component {
  constructor() {
    super();

    //State info goes here
  }

  render() {
    return (
      <div>
        <div className="NavBar">
          <Link to="/">
            <button className="Home">test</button>
          </Link>
          <img
            src={require("./resource/HiResLogo.png")}
            alt="Ava's Angel"
            className="Logo"
          />
        </div>
        <div className="blankSpace " />
        <header></header>
      </div>
    );
  }
}

export default NewHeader;
