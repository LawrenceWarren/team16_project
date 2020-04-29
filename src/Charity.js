//!NOTE
//Much of the code in this file is taken from Food.js by Lawrence Warren.
//Even the src/css/Charity.css class tags (written by Ben) now goes unused
//As the css tags in this code are wholesale copied from Food.js. It therefore
//defaults to using the style sheet Food.css (written by Lawrence) instead,
//which works because the code is almost identical. Many of the comments are also the same.

//The file was changed by Lawrence after Ben committed "his" code, in order to better
//reflect the quality of the rest of the project, including id tags for testing,
//an asynchronous server API call & buttons which can switch pages, which are all present in
//Lawrence's Food.js, but were not present in the version Ben copied.

//!In short, a significant amount of this code was written by Lawrence Warren,
//!which will be reflected in his personal report.

/*import React from "react";
import "./css/Charity.css";
import Header from "./Header";
import Footer from "./Footer";
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
          charity_image: "",
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
  async componentDidMount() {
    console.log("Charity: Fetching from server...");
    try {
      const res = await fetch("/charityReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const charity = await res.json();
      this.setState({ charityList: charity });
      console.log("Charity: Data from the server has been received!");
    } catch (err) {
      console.error("Charity: " + err);
    }
  }

  //!-------------!//
  //!Render method!//
  //!-------------!//
  render() {
    //!DOM
    return (
      <div className="mainDiv">
        <Header />

        <p className="banner">
          {" "}
          Below are a selection of local charities with links to their webpages{" "}
        </p>

        {/*Creates a swipeable div element, which allows for touch control
         * However, swipeable does not allow for styling, hence the nested div}
        <Swipeable
          onSwipedLeft={this.onClickBack}
          onSwipedRight={this.onClickForward}
        >
          <div className="contentContainer">
            {/*On screen indications for swiping }
            <img
              src={require("./resource/food/swipeLeft.png")}
              className="swipeLeft"
              onClick={this.onClickBack}
              alt="Upon pressing, you move backwards through the eateries."
            />
            <img
              src={require("./resource/food/swipeRight.png")}
              className="swipeRight"
              onClick={this.onClickForward}
              alt="Upon pressing, you move forwards through the eateries."
            />

            <img
              src={this.state.charityList[this.state.index]?.charity_image}
              className="picture"
              alt=""
            />

            <b>
              <p className="title">Name</p>
            </b>
            <p id="titleID" className="content">
              {this.state.charityList[this.state.index]?.charity_name}
            </p>

            <b>
              <p className="title">Phone</p>
            </b>
            <p id="phoneID" className="content">
              {this.state.charityList[this.state.index]?.charity_phone}
            </p>

            <b>
              <p className="title">Email</p>
            </b>
            <p id="emailID" className="content">
              {this.state.charityList[this.state.index]?.charity_email}
            </p>
            <b>
              <p className="title">Introduction</p>
            </b>
            <p id="introductionID" className="content">
              {this.state.charityList[this.state.index]?.charity_introduce}
            </p>

            <b>
              <p className="title">Weblink</p>
            </b>
            <a href={this.state.charityList[this.state.index]?.charity_weblink}>
              <p id="weblinkID" className="content">
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

export default Charity;*/

 
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

class CharityConstructor extends React.Component {
    constructor() {
        super();

        this.leftSwipe = this.onClickBack.bind(this);
        this.rightSwipe = this.onClickForward.bind(this);

        this.state = {
            index: 0,
            charityList: []
        };
    }

    callServer() {
        fetch("http://localhost:3000/charity/")
          .then(res => res.json())
          .then(res => this.setState({ charityList: res }))
          .catch(err => err);
    }

    componentWillMount() {
        this.callServer();
    }
}

const tileData = [
    {
        img: "https://upload.wikimedia.org/wikipedia/en/0/01/Mind-logo.gif",
        title: 'Birmingham Mind',
        url:"https://birminghammind.org/",
    },
    {
        img: "https://breastcancersupport.org.uk/wp-content/uploads/2015/11/logo.png",
        title: 'Breast Cancer Support Charity',
        url:"https://breastcancersupport.org.uk/"
    },
    {
        img: "https://www.barondavenportscharity.org/sites/all/themes/custom/nestor_subtheme/logo.png",
        title: 'Baron Davenport Charity',
        url:"https://www.barondavenportscharity.org/"
    },
    {
        img: "https://www.cancerresearchuk.org/sites/all/themes/custom/cruk/cruk-logo.svg",
        title: 'Cancer Research UK',
        url:"https://www.cancerresearchuk.org/"
    },
    {
        img: "https://www.thepayrollgivingteam.co.uk/wp/wp-content/uploads/2016/05/HRUK_Logo_Screen_FullColour-sml.jpg",
        title: 'Heart Research UK Midlands',
        url:"https://heartresearch.org.uk/contact-us/"
    },
    {
        img: "https://childliverdisease.org/wp-content/uploads/2019/04/CLDF-LOGO.png",
        title: 'CLDF - Children Liver Disease Charity',
        url:"https://childliverdisease.org/"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/BHF_Logo_Lockup_Vertical_BHF_Red_RGB%404x.png",
        title: 'British Heart Foundation Furniture and Electrical',
        url:"https://www.bhf.org.uk/what-we-do/find-bhf-near-you/birmingham-furniture-electrical-store"
    },
    {
        img: "https://www.princes-trust.org.uk/cs/pt/img/logo.png",
        title: 'The Prince Trust Birmingham Centre',
        url:"https://www.princes-trust.org.uk/about-the-trust/where-we-work/central-england/birmingham-centre"
    },
    {
        img: "https://www.supportthroughcourt.org/media/2176/logo-w-psu-v2.png",
        title: 'Personal Support Unit',
        url:"https://www.supportthroughcourt.org/"
    },
    {
        img: "https://www.rspb.org.uk/static/images/rspb-logo-white.png",
        title: 'RSPB',
        url:"https://www.rspb.org.uk/"
    },
    {
        img: "https://smartworks.org.uk/wp-content/themes/smartworks/images/logo.png",
        title: 'Smart Works Birmingham',
        url:"https://smartworks.org.uk/birmingham-smart-works/"
    }
]

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: '3vw',
      marginRight: '15%',
      marginLeft: '15%',
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: 'rgb(20, 20, 20)',
      fontFamily:"Microsoft YaHei",
      fontWeight: '700',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    image: {
        width: '100%',
        height: '100%',
    }
  }));





class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchURL: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange (event) {
        this.setState({
            [event.target.name] : "https://www.google.com/search?q=" + event.target.value 
        })
    }

    handleSubmit (event){
        event.preventDefault();
        window.open(this.state.searchURL);
    }

    render(){
        return(
            <div>

                <div class = "charity_header">Charities</div>

                <div class="search-container">
                    <img src={SearchIcon} alt="search" />
                    <form>
                        <input 
                            type="text" 
                            placeholder="Search.."
                            name="searchURL"
                            onChange={this.handleInputChange}
                            required />
                        <button 
                            type="submit" 
                            onClick={this.handleSubmit}>
                            Search
                        </button>
                    </form>
                </div>
            </div>
            )
        }
    }

function Charity(){
    const classes = useStyles();

    return(
        <div>
            <Header />
            <Search />

            <h2 class = "charityListHeader">
                Below are a selection of local charities with links to their webpages
            </h2>

            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                    <a 
                        href = {tile.url} 
                        target = "_blank" 
                        rel= "noopener noreferrer">
                        <img 
                            src={tile.img} 
                            alt={tile.title} 
                            className={classes.image}
                        />
                    </a>
                    <GridListTileBar
                        title={tile.title}
                        classes={{
                        root: classes.titleBar,
                        title: classes.title,
                        }}
                        actionIcon={
                        <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={classes.title} />
                        </IconButton>
                        }
                    />
                    </GridListTile>
                ))}
                </GridList>
              </div>

            <Footer />
        </div>
    )
}
export default Charity;