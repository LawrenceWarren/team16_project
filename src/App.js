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

const SubMenuItem = (props) => (
    <a
      href={props.url} 
      data-id = {props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={(props.showSubMenuItem === props.index) ? 'submenuitem-hover' : '' }
      > {/* Modify here to <Link> to implement router */}
      {props.text}
    </a>
)

const MenuLevel = (props) => (
    <li
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={(props.showMenuItem === props.index) ? 'menu-hover' : ''}
      >
      <a href={props.url}>{props.text}</a> {/* Modify here to <Link> to implement router */}
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
        url: 'https://www.avas-angels.com/',
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
        url: 'https://www.avas-angels.com/',
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
        url: 'https://www.avas-angels.com/',
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
                text: 'FeedBack',
                url: 'https://www.avas-angels.com/contact.html',
            }
        ]
    },
    {
        text: "More on Ava's Angels",
        url: 'https://www.avas-angels.com/',
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
  
    render() {
      return (
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
        marginRight: "4%",
        marginTop: "1vw",
        height: "15%",
        width: "15%",
        backgroundColor: grey[300],
        "&:hover": {
            backgroundColor: grey[500]
        },
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
        backgroundSize:"80% 80%",
        backgroundPosition: "center",
    },
}));

const TwitterImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${Twitter})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"70% 70%",
        backgroundPosition: "center",
    },
}));

const InsImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${Ins})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"70% 70%",
        backgroundPosition: "center",
    },
}));

const LinkedInImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${LinkedIn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"70% 70%",
        backgroundPosition: "center",
    },
}));

const FeedBackImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${FeedBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"70% 70%",
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

        <div class = "introduction">
        <div class = "title">
            <a href = "https://www.avas-angels.com/">
                <p>{"Ava's Angels In Action"}</p>
            </a>
        </div>
        <div>
            <p class = "content">
                This is a responsive web application designed to provide information about the local area such as food, charity, accomodation.<br /> 
                In addtion, as well as providing the opportunity for user to leav feedback or contact details for the charity.<br />
                Finally, a virtual assistant will help you with quick queries.<br />
            </p>
        </div>
        </div>
        <br />

        <br />
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

        <div class="donate" align="center">
            <a href="https://www.paypal.com/fundraiser/112574636177901026/charity/3575409">
                <img src={donate} alt="donate with paypal or card"  />
            </a>
        </div>

        <div class="footer">
            <div class = "flex">
                <div class="aboutus">
                    <p class="bold" id = "ABOUT">About Us</p>
                    <p> Helping families with sick children in hospital. Providing relief of sickness and suffering among children being cared for in hospital by providing items, 
                            services and emotional support for families to enable them to visit, spend quality time with and care for such children.</p>
                </div>

                <div class = "space"></div>

                <div class="contact">
                    <p class="bold" id = "CONTACT">Contact</p>
                    <p>Contact us: team@avas-angles.com<br />
                        Phone : 07951531748<br /></p>   
                    <FooterButton variant="contained" color="primary" className={FaceBookImg.image} onClick={()=>{window.location.href="https://www.facebook.com/avas.angels.739"}}></FooterButton>
                    <FooterButton variant="contained" color="primary" className={TwitterImg.image} onClick={()=>{window.location.href="https://twitter.com/AvasAngels_com"}}></FooterButton>
                    <FooterButton variant="contained" color="primary" className={InsImg.image} onClick={()=>{window.location.href="https://www.instagram.com/avasangelscharity/"}}></FooterButton>
                    <FooterButton variant="contained" color="primary" className={LinkedInImg.image} onClick={()=>{window.location.href="https://www.linkedin.com/in/avas-angels-1519a2160/"}}></FooterButton>
                    <FooterButton variant="contained" color="primary" className={FeedBackImg.image} onClick={()=>{window.location.href="https://www.avas-angels.com/contact.html"}}></FooterButton>
                </div>
            </div>
            <div class = "copyRight">
                <p>© Copyright 2019-2020. Designed and powered by Ali S., Lawrence W., Shan W.Z., Benjamin S., Chen Y.T. and Zhang J.H. All Rights Reserved. </p>
            </div>
        </div>
    </div>
    );
}

export default App;
