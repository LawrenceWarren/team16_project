//This page was written by Junhao Zhang and updated by Lawrence Warren.

import React from "react";
import "./css/Feedback.css";
import Header from "./Header"; //The header of the page
import Footer from "./Footer"; //The footer of the page

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      name: "",
      email: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h2 className="banner">Feedback</h2>

        {/* Radio Buttons */}
        <form className="container" method="post" id="reused_form">
          <label className="title" htmlFor="radioButtons">
            How would you rate your overall experience?
          </label>
          <br />
          <div id="radioButtons" className="radioButtons">
            <input type="radio" name="experience" id="bad" value="bad" />
            <label htmlFor="bad" aria-hidden="true" className="button">
              Bad
            </label>

            <input
              type="radio"
              name="experience"
              id="average"
              value="average"
            />
            <label htmlFor="average" aria-hidden="true" className="button">
              Average
            </label>

            <input type="radio" name="experience" id="good" value="good" />
            <label htmlFor="good" aria-hidden="true" className="button">
              Good
            </label>
          </div>

          {/* Comments input box */}
          <label htmlFor="comments" className="title">
            Any comments:
          </label>
          <textarea
            className="form-control"
            type="textarea"
            id="comments"
            placeholder="Fill this field"
            name="comments"
            maxLength="6000"
            rows="8"
          ></textarea>

          <div className="row">
            {/* Your name inputs box */}
            <div className="col-sm-6 form-group">
              <label htmlFor="name" className="title">
                Your Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fill this field"
                id="name"
                name="name"
                required
              />
            </div>

            {/* Email inputs box */}
            <div className="col-sm-6 form-group">
              <label htmlFor="email" className="title">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Fill this field"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          {/*The bottom submit button */}
          <button type="submit" className="btn btn-lg btn-warning pull-right">
            Send &rarr;
          </button>
        </form>

        <Footer />
      </div>
    );
  }
}

export default Feedback;
