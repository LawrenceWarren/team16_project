import React from 'react';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {grey} from "@material-ui/core/colors";
import FaceBook from "./resource/facebook.png";
import Twitter from "./resource/ttww.png";
import Ins from "./resource/ins.png";
import LinkedIn from "./resource/linkedin.png";
import FeedBack from "./resource/feedback.png";
import donate from "./resource/donate.png";
import figure from "./resource/Ava's Angels.jpg";

const SubMenuItem = (props) => (
    <a
      href={props.url} 
      data-id = {props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={(props.showSubMenuItem === props.index) ? 'submenuitem-hover' : '' }
      > {/* Modify here to <Link> to implement router . Add a flag to indicate whether the url is out webpages and then select to use Link or a*/}
      {props.text}
    </a>
)

const MenuLevel = (props) => (
    <li
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={(props.showMenuItem === props.index) ? 'menu-hover' : ''}
      >
      {(props.text == 'Home') ? (
        <a href={props.url} className = {'menulevel'}>{props.text}</a>
      ) : (
        <span className = {'menulevel'}>{props.text}</span>
      )}
      <div className={(props.showMenuItem === props.index) ? 'submenu-show' : 'submenu-hidden'}>
        {
          props.children.map((item, index) => (
            <SubMenuItem
              text={item.text}
              key={item.text + index}
              url={item.url}
              index = {index}
              showSubMenuItem={props.showSubMenuItem}
              onMouseOver={props.onSubItemMouseOver}
              onMouseLeave={props.onSubItemMouseLeave}
            />
          ))
        }
      </div>
    </li>
  )

const menuitems = [
    {
        text: 'Home',
        url: 'https://www.avas-angels.com/',
        submenu: []
    },
    {
        text: 'Infrastructure',
        url: '',
        submenu:[
            {
                text: 'Food',
                url: 'https://www.avas-angels.com/',
            },
            {
                text: 'Charities',
                url: 'https://www.avas-angels.com/',
            },
            {
                text: 'Accommodation',
                url: 'https://www.avas-angels.com/',
            }
        ]
    },
    {
        text: 'Contact',
        url: '',
        submenu: [
            {
                text: 'Facebook',
                url: 'https://www.facebook.com/avas.angels.739',
            },
            {
                text: 'Twitter',
                url: 'https://twitter.com/AvasAngels_com',
            },
            {
                text: 'Instagram',
                url: 'https://www.instagram.com/avasangelscharity/',
            },
            {
                text: 'LinkedIn',
                url: 'https://www.linkedin.com/in/avas-angels-1519a2160/',
            },
            {
                text: 'Leave Contact Info',
                url: 'https://www.avas-angels.com/contact.html',
            }
        ]
    },
    {
        text: 'Get Involved',
        url: '',
        submenu: [
            {
                text: 'Donate',
                url: 'https://www.paypal.com/fundraiser/112574636177901026/charity/3575409',
                submenu: []
            },
            {
                text: 'Volunteers',
                url: 'https://www.avas-angels.com/getinvolved.html',
            },
            {
                text: 'Supporters',
                url: 'https://www.avas-angels.com/getinvolved.html',
            },
            {
                text: 'Sponsors',
                url: 'https://www.avas-angels.com/getinvolved.html',
            },
            {
                text: 'FeedBack',
                url: 'https://www.avas-angels.com/contact.html',
            }
        ]
    },
    {
        text: "More on Ava's Angels",
        url: '',
        submenu: [
            {
                text: "About Ava's Angels",
                url: 'https://www.avas-angels.com/',
            },
            {
                text: 'Angel Services',
                url: 'https://www.avas-angels.com/angelservices.html',
            },
            {
                text: 'How we make a difference',
                url: 'https://www.avas-angels.com/difference.html',
            },
            {
                text: 'Proud Supporters',
                url: 'https://www.avas-angels.com/supporters.html',
            },
            {
                text: 'Shop',
                url: 'https://www.avas-angels.com/shop.html',
            },
            {
                text: 'News/Press',
                url: 'https://www.avas-angels.com/news.html',
            }
        ]
    }
  ]
  
  class Menu extends React.Component {
    constructor() {
      super()
  
      this.state = {
        showMenuItem: -1,
        showSubMenuItem: -1,
        needFixed: false,
      }
    }
  
    handleMenuLevelHover = (index) => {
      this.setState({ showMenuItem: index })
    }
  
    handleMenuLevelLeave = () => {
      this.setState({ showMenuItem: -1 })
    }
  
    handleSubMenuLevelHover = (index, e) => {
      this.setState({
        showMenuItem: index,
        showSubMenuItem: +e.target.attributes.getNamedItem('data-id').value
      })
    }
  
    handleSubMenuLevelLeave = (e) => {
      this.setState({ showSubMenuItem: -1 })
    }

    componentDidMount() {

        const fixedTop = document.getElementById('fixed-menu').offsetTop;
        window.onscroll = () => {
          let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
          if (scrollTop >= fixedTop) {
            this.setState({ needFixed: true })
          } else if (scrollTop < fixedTop) {
            this.setState({ needFixed: false })
          }
        }
      }
  
    render() {
      return (
        <div id='fixed-menu' className={`${this.state.needFixed ? 'fixed' : ''}`}>
        <ul>
            {
            menuitems.map((level, index) => (
                <MenuLevel
                text={level.text}
                url={level.url}
                key={index}
                index={index}
                onMouseOver={() => { this.handleMenuLevelHover(index) }}
                onMouseLeave={this.handleMenuLevelLeave}
                onSubItemMouseOver={(e) => { this.handleSubMenuLevelHover(index, e) }}
                onSubItemMouseLeave={this.handleSubMenuLevelLeave}
                showSubMenuItem={this.state.showSubMenuItem}
                showMenuItem={this.state.showMenuItem}
                >
                {level.submenu}
                </MenuLevel>
            ))
            }
        </ul>
        </div>
      )
    }
  }

const MainButton = withStyles({
    root: {
        fontSize: "2.5vw",
        boxShadow:"none",
        textTransform:"none",
        fontWeight:"bold",
        fontFamily: "Georgia",
        height:"15vw",
        width:"25vw",
        backgroundColor: grey[500],
        borderRadius:"8vw",
        "&:hover": {
            backgroundColor: grey[700]
        },
    }
})(Button);

const FooterButton = withStyles({
    root:{
        marginRight: "1.5vw",
        marginTop: "1vw",
        height: "2.5vw",
        width: "2.5vw",
        backgroundColor: "#FFFFFF",
        "&:hover": {
            backgroundColor: grey[500]
        },
    }
})(Button);

const GetInvolvedButton = withStyles({
    root:{
        fontSize: "1.1vw",
        fontWeight:"bold",
        fontFamily: "Georgia",
        height:"10vw",
        width:"30vw",
        color: "rgba(39, 39, 39,0.7)",
        backgroundColor: "#FFFFFF",
        "&:hover": {
            backgroundColor: grey[400]
        },
        marginTop: "3.5vw",
    }
})(Button);

const FoodContactMarginStyle = makeStyles(theme => ({
    margin: {
        marginRight: "3vw",
    }
  }));

const AccomFeedBackMarginStyle = makeStyles(theme => ({
    margin: {
        marginLeft: "3vw",
    }
}));

const CharityMarginStyle = makeStyles(theme => ({
    margin:{
        marginRight: "5vw",
        marginBottom: "5vw",
    }
}))

const AboutMarginStyle = makeStyles(theme => ({
    margin:{
        marginLeft: "5vw",
        marginBottom: "5vw",
    }
}))

const FaceBookImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${FaceBook})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const TwitterImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${Twitter})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const InsImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${Ins})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const LinkedInImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${LinkedIn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const FeedBackImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${FeedBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

function App() {
    const FCMargin = FoodContactMarginStyle();
    const AFMargin = AccomFeedBackMarginStyle();
    const CMargin = CharityMarginStyle();
    const AMargin = AboutMarginStyle();
    const FaceBookImg = FaceBookImage();
    const TwitterImg = TwitterImage();
    const InsImg = InsImage();
    const LinkedInImg = LinkedInImage();
    const FeedBackImg = FeedBackImage();

    return (
    <div>
        <Menu />
        <header>
        <div class = "pageHeader" align = "center">
            <a href = "https://www.avas-angels.com/">
                <img src="https://www.avas-angels.com/images/HiResLogo.png" alt = "Ava's Angel"/>
            </a>
        </div>
        </header>

        <div class = "introduce"> Introduction: </div>
        <div class = "introduction">
            <img src= {figure} alt = "Ava's Angel" class="history-image"/>
            <p class = "content-history">
                <div class = "title">
                    <a href = "https://www.avas-angels.com/">
                        <p>{"History of Ava's Angels"}</p>
                    </a>
                </div>
                <br/><br/>Ava was a perfectly healthy and beautifl 3 year old girl, enjoying every aspect of life, who unexpectedly fell ill on holiday in March 2017.
                Ava and her parents had a perfect holiday and were about to fly home to share these memories. Ava contracted an extremely rare form of the very 
                common Epstein Barr Virus which impacted her brain and whilst there is no immunisation against it, no treatment to shop the impact or to cure it,
                all options were exhasuted to give Ava the best possible chance of recovery.
                Sadly, Ava passed away after a long battle by her loved ones to keep her with them.
                Inspired by Ava, and wanting to help other children, {"Ava's Angels"} was established in March 2018 and provides support to families of sick children
                during hospital stays, helping them to spend more time caring for their child.
            </p>
        </div>
        <br />

        <div class = "introduction">
            <img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/75244443_161725248223830_1550331828311660529_n.jpg?_nc_ht=scontent.cdninstagram.com&oh=72acfbed5db6d7cc4e5d42f9e56fafb6&oe=5E6FA1A4" class = "introduction-image" alt = "ava_activity"/>
            <p class = "content-introduction">
                <div class = "title">
                    <a href = "https://www.avas-angels.com/">
                        <p>{"Ava's Angels In Action"}</p>
                    </a>
                </div>
                <br/><br/>Helping families with sick children.
                Providing relief of sickness and suffering among children being cared for in hospital by providing items,
                services and emotional support for families to enable them to visit, spend quality time with and care for such children.
                This website works focused on providing support to parents of children in ICUs at a Brimingham hospital. This wish to display
                information to parents that are staying at the hospital while their children are under treatment. This also provide information about
                 local services, hospital facilities and general support information.
            </p>
        </div>
        <br /><br />

        <div class = "explore"> Explore: </div>

        <div class = "button">
            <div>
                <MainButton variant="contained" color="primary" className={FCMargin.margin}>Food</MainButton>
                <MainButton variant="contained" color="primary" className={AFMargin.margin}>Accommodation</MainButton>
            </div>
            <div>
                <MainButton variant="contained" color="primary" className={CMargin.margin}>Charities</MainButton>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/75244443_161725248223830_1550331828311660529_n.jpg?_nc_ht=scontent.cdninstagram.com&oh=72acfbed5db6d7cc4e5d42f9e56fafb6&oe=5E6FA1A4" class = "button_image" alt = "ava_activity"/>
                <MainButton variant="contained" color="primary" className={AMargin.margin}>About</MainButton>
            </div>
            <div>
                <MainButton variant="contained" color="primary" className={FCMargin.margin}>Contact</MainButton>
                <MainButton variant="contained" color="primary" className={AFMargin.margin}>Feedback</MainButton>
            </div>
        </div>

        <div class = "involved"> Get Involved: </div>

        <div align="center"> <GetInvolvedButton variant="contained" color="primary" onClick={()=>{window.location.href="https://www.avas-angels.com/getinvolved.html"}}>{"Become Part Of Ava's Angels"}</GetInvolvedButton></div>

        <div class="donate" align="center">
            <a href="https://www.paypal.com/fundraiser/112574636177901026/charity/3575409">
                <img src={donate} alt="donate with paypal or card"  />
            </a>
        </div>

        <div class = "contact">  
            <FooterButton variant="contained" color="primary" className={FaceBookImg.image} onClick={()=>{window.location.href="https://www.facebook.com/avas.angels.739"}}></FooterButton>
            <FooterButton variant="contained" color="primary" className={TwitterImg.image} onClick={()=>{window.location.href="https://twitter.com/AvasAngels_com"}}></FooterButton>
            <FooterButton variant="contained" color="primary" className={InsImg.image} onClick={()=>{window.location.href="https://www.instagram.com/avasangelscharity/"}}></FooterButton>
            <FooterButton variant="contained" color="primary" className={LinkedInImg.image} onClick={()=>{window.location.href="https://www.linkedin.com/in/avas-angels-1519a2160/"}}></FooterButton>
            <FooterButton variant="contained" color="primary" className={FeedBackImg.image} onClick={()=>{window.location.href="https://www.avas-angels.com/contact.html"}}></FooterButton>
        </div>

        <div class = "related">
            <p>
                <a href = ""> FAQ </a> |
                <a href = ""> Terms of Use </a> |
                <a href = ""> Privacy </a> |
                <a href = ""> Contact </a>
            </p>
        </div>

        <div class = "copyRight">
            <p>© Copyright 2019-2020. Designed and powered by Ali S., Lawrence W., Shan W.Z., Benjamin S., Chen Y.T. and Zhang J.H. All Rights Reserved. </p>
        </div>
    </div>
    );
}

export default App;
