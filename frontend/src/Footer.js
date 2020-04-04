import React from "react";
import "./css/Footer.css";
import donate from "./resource/donate.png";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";

const GetInvolvedButton = withStyles({
  root: {
    fontSize: "1.1vw",
    fontWeight: "bold",
    fontFamily: "Georgia",
    height: "10vw",
    width: "30vw",
    color: "rgba(39, 39, 39,0.7)",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: grey[400],
    },
    marginTop: "3.5vw",
  },
})(Button);

function Footer() {
  return (
    <div>
      <p className="involved"> Get Involved: </p>

      <div align="center">
        <GetInvolvedButton
          variant="contained"
          color="primary"
          onClick={() => {
            window.open("https://www.avas-angels.com/getinvolved.html");
          }}
        >
          {"Become Part Of Ava's Angels"}
        </GetInvolvedButton>
      </div>

      <div className="donate" align="center">
        <a href="https://www.paypal.com/fundraiser/112574636177901026/charity/3575409">
          <img src={donate} alt="donate with paypal or card" />
        </a>
      </div>

      <div className="SocialButtons">
        <button
          className="butt fb-butt"
          onClick={() => {
            window.open("https://www.facebook.com/avas.angels.739");
          }}
        />

        <button
          className="butt tw-butt"
          onClick={() => {
            window.open("https://twitter.com/AvasAngels_com");
          }}
        />

        <button
          className="butt ins-butt"
          onClick={() => {
            window.open("https://www.instagram.com/avasangelscharity/");
          }}
        />

        <button
          className="butt li-butt"
          onClick={() => {
            window.open("https://www.linkedin.com/in/avas-angels-1519a2160/");
          }}
        />

        <button
          className="butt feed-butt"
          onClick={() => {
            window.open("https://www.avas-angels.com/contact.html");
          }}
        />
      </div>

      <div className="related">
        <p>
          {/* eslint-disable-next-line */}
          <a href=""> FAQ </a> |{/* eslint-disable-next-line */}
          <a href=""> Terms of Use </a> |{/* eslint-disable-next-line */}
          <a href=""> Privacy </a> |{/* eslint-disable-next-line */}
          <a href=""> Contact </a>
        </p>
      </div>

      <div className="copyRight">
        <p>
          © Copyright 2019-2020. Designed and powered by Ali S., Lawrence W.,
          Shan W.Z., Benjamin S., Chen Y.T. and Zhang J.H. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
