import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

//SubMenuItem component
const SubMenuItem = (props) =>
  props.official_flag === "true" ? ( //If the official flag is true...
    <a //...SubMenuItem is a link to an external website, populating the link values with values from props
      href={props.url}
      data-id={props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={
        props.showSubMenuItem === props.index ? "subMenuItem-hover" : ""
      }
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {props.text}
    </a>
  ) : (
    //Else if the official flag is false
    <Link //SubMenuItem is a link to an internal page, populating these values with values from props
      to={props.url}
      data-id={props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={
        props.showSubMenuItem === props.index ? "subMenuItem-hover" : ""
      }
    >
      {props.text}
    </Link>
  );

//Main menu component
const MenuLevel = (props) => (
  <li
    //Calls functions and sets styling based on given events
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={props.showMenuItem === props.index ? "menu-hover" : ""}
  >
    {props.text === "Home" ? (
      <Link to={props.url} className={"menuLevel"}>
        {props.text}
      </Link>
    ) : (
      <span className={"menuLevel"}>{props.text}</span>
    )}
    <div
      className={
        props.showMenuItem === props.index ? "subMenu-show" : "subMenu-hidden"
      }
    >
      {props.children.map((item, index) => (
        <SubMenuItem
          text={item.text}
          key={item.text + index}
          url={item.url}
          official_flag={item.official_flag}
          index={index}
          showSubMenuItem={props.showSubMenuItem}
          onMouseOver={props.onSubItemMouseOver}
          onMouseLeave={props.onSubItemMouseLeave}
        />
      ))}
    </div>
  </li>
);

//An array of objects detailing each menu and sub-menu item - items at the top appear furthest right of the navBar
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

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenuItem: -1,
      showSubMenuItem: -1,
    };
  }

  handleMenuLevelHover = (index) => {
    this.setState({ showMenuItem: index });
  };

  handleMenuLevelLeave = () => {
    this.setState({
      showMenuItem: -1,
      showSubMenuItem: -1,
    });
  };

  handleSubMenuLevelHover = (index, e) => {
    this.setState({
      showMenuItem: index,
      showSubMenuItem: +e.target.attributes.getNamedItem("data-id").value,
    });
  };

  handleSubMenuLevelLeave = (e) => {
    this.setState({ showSubMenuItem: -1 });
  };

  render() {
    return (
      <div className="NavBar">
        <div className="headerUl">
          {menuItems.map((level, index) => (
            <MenuLevel
              text={level.text}
              url={level.url}
              key={index}
              index={index}
              onMouseOver={() => {
                this.handleMenuLevelHover(index);
              }}
              onMouseLeave={this.handleMenuLevelLeave}
              onSubItemMouseOver={(e) => {
                this.handleSubMenuLevelHover(index, e);
              }}
              onSubItemMouseLeave={this.handleSubMenuLevelLeave}
              showSubMenuItem={this.state.showSubMenuItem}
              showMenuItem={this.state.showMenuItem}
            >
              {level.subMenu}
            </MenuLevel>
          ))}
        </div>
      </div>
    );
  }
}

//The returned header value
function Header() {
  return (
    <div>
      <Menu />
      <img
        className="pageHeader"
        src="https://www.avas-angels.com/images/HiResLogo.png"
        alt="Ava's Angel"
      />
    </div>
  );
}

export default Header;
