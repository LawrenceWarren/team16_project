//This code was written by Wenzheng Shan

import React from "react";
import Zmage from "react-zmage";
import "./About.css";
import Header from "../Header";
import Footer from "../Footer";
import AAService from "./resources/avasangelsservices.png";
import AALogo from "./resources/AALogoAboutPage.png";
import LocationIcon from "./resources/location.png";
import LinkIcon from "./resources/link.png";
import FigureIcon from "./resources/figure.png";

//This is the css style for image box
const css = {
  box: {
    height: "40vw",
    width: "70%",
    border: "0.25vw solid pink",
    overflowY: "scroll",
    marginLeft: "15%",
    marginTop: "5%",
    display: "block",
  },
};

//The array to store the images
const images = [];
//The array to store reference, each image correspond to one reference
const refs = [];
const sets = [];
const threshold = [0.01];
//The number of images
const length = 57;

//Each time read three images from folder and set them into one row
for (let i = 0; i < length; i++) {
  var temp = i;
  const refFirst = React.createRef();
  const refSecond = React.createRef();
  const refThird = React.createRef();
  const first = i;
  const second = ++i;
  const third = ++i;
  switch (length - temp) {
    case 1:
      //Store the reference into array
      refs.push(refFirst);
      //Store the image with tages into array
      images.push(
        <div className="imageBox">
          {/* eslint-disable-next-line */}
          <img
            ref={refFirst}
            data-src={require("./resources/activity" + first + ".jpg")}
          />
        </div>
      );
      break;
    case 2:
      //Store the reference into array
      refs.push(refFirst);
      refs.push(refSecond);
      images.push(
        <div class="imageBox">
          {/* eslint-disable-next-line */}
          <img
            ref={refFirst}
            data-src={require("./resources/activity" + first + ".jpg")}
          />
          {/* eslint-disable-next-line */}
          <img
            ref={refSecond}
            data-src={require("./resources/activity" + second + ".jpg")}
          />
        </div>
      );
      break;
    default:
      //Store the reference into array
      refs.push(refFirst);
      refs.push(refSecond);
      refs.push(refThird);
      //Store the image with tages into array
      images.push(
        <div className="imageBox">
          {/* eslint-disable-next-line */}
          <a
            onClick={() =>
              Zmage.browsing({
                src: require("./resources/activity" + first + ".jpg"),
                set: sets,
                defaultPage: first,
              })
            }
          >
            <img
              ref={refFirst}
              data-src={require("./resources/activity" + first + ".jpg")}
              alt="Activities of Avas Angels"
            />
          </a>
          {/* eslint-disable-next-line */}
          <a
            onClick={() =>
              Zmage.browsing({
                src: require("./resources/activity" + second + ".jpg"),
                set: sets,
                defaultPage: second,
              })
            }
          >
            <img
              ref={refSecond}
              data-src={require("./resources/activity" + second + ".jpg")}
              alt="Activities of Avas Angels"
            />
          </a>
          {/* eslint-disable-next-line */}
          <a
            onClick={() =>
              Zmage.browsing({
                src: require("./resources/activity" + third + ".jpg"),
                set: sets,
                defaultPage: third,
              })
            }
          >
            <img
              ref={refThird}
              data-src={require("./resources/activity" + third + ".jpg")}
              alt="Activities of Avas Angels"
            />
          </a>
        </div>
      );
      break;
  }
}

/**
 * The intersectionobserver interface (subordinate to the intersectionobserver API) provides a means for developers
 * to listen asynchronously to the corss state of the target element and its ancestor or viewport.
 * The ancestor element and viewport are called roots.
 * In fact, it is to observe whether an element is visible in the window.
 */

const io = new IntersectionObserver( //instantiation
  (entries) => {
    //Traversal entries array
    entries.forEach((item) => {
      //When current element is not visible
      if (item.intersectionRatio <= 0) return;
      //Replace item and src
      const { target } = item;
      target.src = target.dataset.src;
    });
  },
  {
    threshold,
  }
);

const onload = () => {
  refs.forEach((item) => {
    // io.observe accept a new DOM element, add multiple listeners
    io.observe(item.current);
  });
};

const LazyLoadPage = () => (
  <div style={css.box}>
    {images}
    {/* eslint-disable-next-line */}
    <img onError={onload} src="" />
  </div>
);

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="establish_header">Establish</div>

        {/*About block 1 */}

        <div className="establish">
          <img src={AALogo} alt="Ava's Angel Logo" className="establish_logo" />
          <div className="establish_content">
            <p>
              Ava{"'"}s Angels was established in March 2018 in memory of Ava
              Akers, who lost her life in 2017 aged just 3 years old. Inspired
              by Ava and seeing the importance of support whilst caring for an
              ill child, Ava{"'"}s Angels was established with the following
              mission statement: Providing relief of sickness and suffering
              among children being cared for in hospital by providing items,
              services and emotional support for families to enable them to
              visit, spend quality time with and care for such children.
            </p>
            <div className="establish_icon">
              <img src={LocationIcon} alt="Location Icon" />
              <a
                href="https://www.google.com/maps/place/Ackleton/@52.5828289,-2.3485737,15z/data=!3m1!4b1!4m5!3m4!1s0x487086d0dac8c695:0x91844632d625fdb7!8m2!3d52.584887!4d-2.3412091"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ackleton, England
              </a>
              <img src={LinkIcon} alt="Link Icon" />
              <a
                href="https://www.avas-angels.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                avas-angels.com
              </a>
              <img src={FigureIcon} alt="Figure Icon" />
              <a
                href="https://uk.linkedin.com/in/phillip-akers-8a0a8810"
                target="_blank"
                rel="noopener noreferrer"
              >
                Phil Akers (Founder)
              </a>
            </div>
          </div>
        </div>

        {/*About block 2 */}

        <div className="service_header"> Service: </div>
        <div className="service">
          <img src={AAService} alt="ava's angel service" />
        </div>

        {/*About block 3 */}

        <div className="activity_header"> Activity: </div>
        <LazyLoadPage />
        <Footer />
      </div>
    );
  }
}

export default About;
