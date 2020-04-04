import React from "react";
import "./css/Footer.css";
import { withStyles } from "@material-ui/core/styles";
import MatButton from "@material-ui/core/Button";
import { grey as matGrey } from "@material-ui/core/colors";

//Component used for the get involved button
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
      backgroundColor: matGrey[400],
    },
    marginTop: "0.5vw",
    marginBottom: "0.5vw",
  },
})(MatButton);

function Footer() {
  return (
    <div class="footerMain">
      {/*Banner across the top*/}
      <p className="banner"> Get Involved: </p>

      {/*Link to getting involved with AvasAngels*/}
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

      {/*PayPal donation link*/}
      <button
        className="donate"
        onClick={() => {
          window.open(
            "https://www.paypal.com/fundraiser/112574636177901026/charity/3575409"
          );
        }}
      />

      {/*Buttons linking to social media.*/}
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

      {/*TODO: Currently unused buttons - do we need them?*/}
      <div className="furtherInfo">
        | {/*These pipes are just for display*/}
        <a href=""> FAQ </a> | {/**/}
        <a href=""> Terms of Use </a> |{/**/}
        <a href=""> Privacy </a> |{/**/}
        <a href=""> Contact </a> |{/**/}
      </div>

      {/*copyright text at the bottom of the page*/}
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
