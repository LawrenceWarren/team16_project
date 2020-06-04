//This page was written by Junhao Zhang, modified by Wenzheng Shan and Lawrence Warren.

import React from "react";
import "./Feedback.css";
import Header from "../Header/Header"; //The header of the page
import Footer from "../Footer/Footer"; //The footer of the page
import axios from "axios";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: "",
      comments: "",
      name: "",
      email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Contact info that stores in database
    const payload = {
      experience: this.state.experience,
      comment: this.state.comments,
      name: this.state.name,
      email: this.state.email,
    };

    console.log(this.state.experience);
    console.log(this.state.comments);
    console.log(this.state.name);
    console.log(this.state.email);

    // Post to api
    axios({
      url: "/feedbackReq",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Feedback: Data has been sent to the server!");

        //Redirect to intermeidate page
        window.location.href = "/Intermediate";
      })
      .catch(() => {
        console.log("Feedback: Fail to send to the server!");
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h2 className="banner">Feedback</h2>

        {/* Radio Buttons */}
        <form
          className="container"
          id="reused_form"
          onSubmit={this.handleSubmit}
        >
          <label className="title" htmlFor="radioButtons">
            How would you rate your overall experience?
          </label>
          <br />
          <div id="radioButtons" className="radioButtons">
            <input
              type="radio"
              name="experience"
              id="bad"
              value="bad"
              onClick={this.handleInputChange}
            />
            <label htmlFor="bad" aria-hidden="true" className="button">
              Bad
            </label>

            <input
              type="radio"
              name="experience"
              id="average"
              value="average"
              onClick={this.handleInputChange}
            />
            <label htmlFor="average" aria-hidden="true" className="button">
              Average
            </label>

            <input
              type="radio"
              name="experience"
              id="good"
              value="good"
              onClick={this.handleInputChange}
            />
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
            onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
