import React from 'react';
import './css/Charity.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Header from './Header';
import Footer from "./Footer";
import SearchIcon from "./resource/charitySearch.jpg";
import { Swipeable } from "react-swipeable";

class Charity extends React.Component {
    constructor() {
      super(); //Does something ??
  
      this.leftSwipe = this.onClickBack.bind(this); //Binds the onClickBack function on page loading
      this.rightSwipe = this.onClickForward.bind(this); //Binds the onClickFroward function on page load
  
      //State property
      this.state = {
        index: 0, //Used for indexing the array
        charityList: [
          {
            charityId: 0,
            charity_name: "",
            charity_phone: "",
            charity_email: "",
            charity_weblink: "",
            charity_introduce: "",
            charity_image: ""
          },
        ],
      };
    }
  
    //Handle swipes forward
    //Sets the state of index to increase by 1,
    // or wrap around to 0
    onClickForward = () => {
      if (this.state.index + 1 === this.state.charityList.length) {
        this.setState({
          index: 0,
        });
      } else {
        this.setState({
          index: this.state.index + 1,
        });
      }
    };
    //Handles swipe back
    //Sets the state of index to decrease by 1,
    //or wrap around to the largest value
    onClickBack = () => {
      if (this.state.index - 1 === -1) {
        this.setState({
          index: this.state.charityList.length - 1,
        });
      } else {
        this.setState({
          index: this.state.index - 1,
        });
      }
    };
  
    //Calls the server upon page loading
    callServer() {
      fetch("http://localhost:4000/charity") //Fetch from the server
        .then((res) => res.json()) //JSONify the data
        .then((res) => this.setState({ charityList: res })) //Pass the JSON into state
        .catch((err) => err);
    }
  
    //Mounts the callServer function upon page loading, calling it
    componentDidMount() {
      this.callServer();
    }
  
    //!-------------!//
    //!Render method!//
    //!-------------!//
    render() {
      //Print for debugging purposes
      console.log("Debug: " + this.state.charityList[this.state.index]?.charity_name);
  
      //!DOM
      return (
        <div className="mainDiv">
          <Header />
  
          <p className="banner"> Below are a selection of local charities with links to their webpages </p>
  
          {/*Creates a swipeable div element, which allows for touch control
           * However, swipeable does not allow for styling, hence the nested div*/}
          <Swipeable
            onSwipedLeft={this.onClickBack}
            onSwipedRight={this.onClickForward}
          >
            <div className="contentContainer">
              <img
                src="https://www.barondavenportscharity.org/sites/all/themes/custom/nestor_subtheme/logo.png"
                className="picture"
                alt=""
              />
  
              <b>
                <p className="title">Name</p>
              </b>
              <p className="content">
                {this.state.charityList[this.state.index]?.charity_name}
              </p>
  
              <b>
                <p className="title">Phone</p>
              </b>
              <p className="content">
                {this.state.charityList[this.state.index]?.charity_phone}
              </p>
  
              <b>
                <p className="title">Email</p>
              </b>
              <p className="content">
                {this.state.charityList[this.state.index]?.charity_email}
              </p>
              <b>
                <p className="title">Introduction</p>
              </b>
              <p className="content">
                {this.state.charityList[this.state.index]?.charity_introduce}
              </p>
  
              <b>
                <p className="title">Weblink</p>
              </b>
              <a href={this.state.charityList[this.state.index]?.charity_weblink}>
                <p className="content">
                  {this.state.charityList[this.state.index]?.charity_weblink}
                </p>
              </a>
            </div>
          </Swipeable>
  
          <Footer />
        </div>
      );
    }
  }
  
  export default Charity;