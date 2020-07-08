//This code was written by Wenzheng Shan and refactored by Lawrence Warren.
import React from "react";
import "./Header.css";

//!SubMenuItem component - this is the text you only see when hovering over Navbar elements
const SubMenuItem = (props) =>
  props.official_flag === "true" ? ( //If the official flag is true, then SubMenuItem is a link to an external website, populating the link values with values from props
    <a
      href={props.url}
      data-id={props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={props.SubMenuItem === props.index ? "subMenuItem-hover" : ""}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {props.text}
    </a>
  ) : (
    //Else SubMenuItem is a link to an internal page, populating these values with values from props
    <a
      href={props.url}
      data-id={props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={props.SubMenuItem === props.index ? "subMenuItem-hover" : ""}
    >
      {props.text}
    </a>
  );

//!MainMenu component - this is the text you permanently see on the NavBar
const MainMenuItem = (props) => (
  <li
    //Calls functions and sets styling based on given mouse events
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={props.MainMenuItem === props.index ? "mainMenu-hover" : ""}
  >
    {props.text === "Home" ? ( //If this is the home button, make it a link to the home page
      <a href={props.url} className={"mainMenuElement"}>
        {props.text}
      </a>
    ) : (
      //Else make it a "span" (it can expand when hovered)
      <span className={"mainMenuElement"}>{props.text}</span>
    )}
    <div
      //Provides styling based on if the Menu Item is hovered over or not.
      className={
        props.MainMenuItem === props.index ? "subMenu-show" : "subMenu-hidden"
      }
    >
      {props.children.map((item, index) => (
        <SubMenuItem //Creating the subMenu items based on the value of index
          text={item.text}
          key={item.text + index}
          url={item.url}
          official_flag={item.official_flag}
          index={index}
          SubMenuItem={props.SubMenuItem}
          onMouseOver={props.onSubItemMouseOver}
          onMouseLeave={props.onSubItemMouseLeave}
        />
      ))}
    </div>
  </li>
);

//!An array of objects detailing each menu and sub-menu item - items at the top appear furthest right of the navBar
const menuItems = [
  //The home button - returns you to route "/" from any page.
  {
    text: "Home",
    url: "/",
    subMenu: [],
  },
  //Infrastructure sub-menu - provides links to Food, Charity & Accommodation pages
  {
    text: "Infrastructure",
    url: "",
    subMenu: [
      {
        text: "Food",
        url: "/Food/",
        official_flag: "false",
      },
      {
        text: "Charities",
        url: "/Charity/",
        official_flag: "false",
      },
      {
        text: "Accommodation",
        url: "/Accommodation/",
        official_flag: "false",
      },
    ],
  },
  //Contact sub-menu - provides links to AA Facebook, Twitter, Instagram, LinkedIn & Team16 Contact page
  {
    text: "Contact",
    url: "",
    subMenu: [
      {
        text: "Facebook",
        url: "https://www.facebook.com/avas.angels.739",
        official_flag: "true",
      },
      {
        text: "Twitter",
        url: "https://twitter.com/AvasAngels_com",
        official_flag: "true",
      },
      {
        text: "Instagram",
        url: "https://www.instagram.com/avasangelscharity/",
        official_flag: "true",
      },
      {
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/avas-angels-1519a2160/",
        official_flag: "true",
      },
      {
        text: "Leave Contact Info",
        url: "/Contact/",
        official_flag: "false",
      },
    ],
  },
  //Get involved sub-menu - provides links to AA PayPal, Volunteering, Supporters, Sponsors & Team16 Feedback page
  {
    text: "Get Involved",
    url: "",
    subMenu: [
      {
        text: "Donate",
        url:
          "https://www.paypal.com/fundraiser/112574636177901026/charity/3575409",
        official_flag: "true",
      },
      {
        text: "Volunteers",
        url: "https://www.avas-angels.com/getinvolved.html",
        official_flag: "true",
      },
      {
        text: "Supporters",
        url: "https://www.avas-angels.com/getinvolved.html",
        official_flag: "true",
      },
      {
        text: "Sponsors",
        url: "https://www.avas-angels.com/getinvolved.html",
        official_flag: "true",
      },
      {
        text: "FeedBack",
        url: "/Feedback/",
        official_flag: "false",
      },
    ],
  },
  //More AA sub-menu - provides link to Team16 About page, "difference", supporters, Shop & News
  {
    text: "More on Ava's Angels",
    url: "",
    subMenu: [
      {
        text: "About Ava's Angels",
        url: "/About/",
        official_flag: "false",
      },
      {
        text: "How we make a difference",
        url: "https://www.avas-angels.com/difference.html",
        official_flag: "true",
      },
      {
        text: "Proud Supporters",
        url: "https://www.avas-angels.com/supporters.html",
        official_flag: "true",
      },
      {
        text: "Shop",
        url: "https://www.avas-angels.com/shop.html",
        official_flag: "true",
      },
      {
        text: "News/Press",
        url: "https://www.avas-angels.com/news.html",
        official_flag: "true",
      },
    ],
  },
];

//!The menu component itself
class NavBar extends React.Component {
  constructor() {
    super();

    //State is set based on what they're hovering over
    this.state = {
      MainMenuItem: -1,
      SubMenuItem: -1,
    };
  }

  //When hovering over a main menu item, set the state
  MainMenuHover = (index) => {
    this.setState({ MainMenuItem: index });
  };

  //When your mouse leaves the main menu items, reset the state
  MainMenuLeave = () => {
    this.setState({
      MainMenuItem: -1,
      SubMenuItem: -1,
    });
  };

  //When hovering over a sub menu item, set the state
  SubMenuHover = (index, e) => {
    this.setState({
      MainMenuItem: index,
      SubMenuItem: +e.target.attributes.getNamedItem("data-id").value,
    });
  };

  //When your mouse leaves the sub menu items, reset the state
  SubMenuLeave = () => {
    this.setState({ SubMenuItem: -1 });
  };

  //!The navBar component which is pinned to the screens top
  render() {
    return (
      <div className="NavBar">
        <div className="NavBarItems">
          {menuItems.map((level, index) => (
            <MainMenuItem
              text={level.text}
              url={level.url}
              key={index}
              index={index}
              onMouseOver={() => {
                this.MainMenuHover(index);
              }}
              onMouseLeave={this.MainMenuLeave}
              onSubItemMouseOver={(e) => {
                this.SubMenuHover(index, e);
              }}
              onSubItemMouseLeave={this.SubMenuLeave}
              SubMenuItem={this.state.SubMenuItem}
              MainMenuItem={this.state.MainMenuItem}
            >
              {level.subMenu}
            </MainMenuItem>
          ))}
        </div>
      </div>
    );
  }
}

//!The actual returned header component
function Header() {
  return (
    <div>
      <NavBar />
      <img
        className="Logo"
        src="https://www.avas-angels.com/images/HiResLogo.png"
        alt="Ava's Angel"
      />
    </div>
  );
}

export default Header;
