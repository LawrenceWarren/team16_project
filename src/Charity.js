//This page was written by Ben Smith.

import React from "react";
import "./css/Charity.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Header from "./Header";
import Footer from "./Footer";
import SearchIcon from "./resource/charitySearch.jpg";

class Charity extends React.Component {
  constructor() {
    super();

    this.state = {
      // Initializes the charity list, setting the data to be blank.
      charityList: [
        {
          charityId: 1,
          charity_name: "",
          charity_phone: "",
          charity_email: "",
          charity_weblink: "",
          charity_introduce: "",
          charity_image: "",
        },
      ],
    };
    // Sets the display settings for the presentation of the tiles.
    this.styles = makeStyles((theme) => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        marginTop: "3vw",
        marginRight: "15%",
        marginLeft: "15%",
      },
      gridList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
      },
      title: {
        color: "rgb(20, 20, 20)",
        fontFamily: "Microsoft YaHei",
        fontWeight: "700",
      },
      titleBar: {
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      },
      image: {
        width: "100%",
        height: "100%",
      },
    }));
  }

  // The data is retrieved from the server hosting the backed database.
  callServer() {
    fetch("/charityReq")
      .then((res) => res.json())
      .then((res) => this.setState({ charityList: res }))
      .catch((err) => err);
  }

  // The data is retrieved as soon as the page is loaded.
  componentDidMount() {
    this.callServer();
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Search />

          <h2 class="charityListHeader">
            Below are a selection of local charities with links to their
            webpages:
          </h2>

          <div className={this.styles.root}>
            <GridList className={this.styles.gridList} cols={2.5}>
              {this.state.charityList.map((tile) => (
                <GridListTile key={tile.charity_image}>
                  <a
                    href={tile.charity_weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={tile.charity_image}
                      alt={tile.charity_name}
                      className={this.styles.image}
                    />
                  </a>
                  <GridListTileBar
                    title={tile.charity_name}
                    classes={{
                      root: this.styles.titleBar,
                      title: this.styles.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.charity_name}`}>
                        <StarBorderIcon className={this.styles.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

// Class for the search function.
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchURL: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]:
        "https://www.google.com/search?q=" + event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.open(this.state.searchURL);
  }

  render() {
    return (
      <div>
        <div class="charity_header">Charities</div>

        <div class="search-container">
          <img src={SearchIcon} alt="search" />
          <form>
            <input
              type="text"
              placeholder="Search.."
              name="searchURL"
              onChange={this.handleInputChange}
              required
            />
            <button type="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Charity;
