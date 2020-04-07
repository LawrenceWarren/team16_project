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