import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

const SubMenuItem = (props) =>
  props.official_flag === "true" ? (
    <a
      href={props.url}
      data-id={props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={
        props.showSubMenuItem === props.index ? "submenuitem-hover" : ""
      }
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {props.text}
    </a>
  ) : (
    <Link
      to={props.url}
      data-id={props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={
        props.showSubMenuItem === props.index ? "submenuitem-hover" : ""
      }
    >
      {props.text}
    </Link>
  );

const MenuLevel = (props) => (
  <li
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={props.showMenuItem === props.index ? "menu-hover" : ""}
  >
    {props.text === "Home" ? (
      <Link to={props.url} className={"menulevel"}>
        {props.text}
      </Link>
    ) : (
      <span className={"menulevel"}>{props.text}</span>
    )}
    <div
      className={
        props.showMenuItem === props.index ? "submenu-show" : "submenu-hidden"
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

const menuitems = [
  {
    text: "Home",
    url: "/",
    submenu: [],
  },
  {
    text: "Infrastructure",
    url: "",
    submenu: [
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
  {
    text: "Contact",
    url: "",
    submenu: [
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
  {
    text: "Get Involved",
    url: "",
    submenu: [
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
  {
    text: "More on Ava's Angels",
    url: "",
    submenu: [
      {
        text: "About Ava's Angels",
        url: "/About/",
        official_flag: "false",
      },
      {
        text: "Angel Services",
        url: "https://www.avas-angels.com/angelservices.html",
        official_flag: "true",
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
      needFixed: false,
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

  componentDidMount() {
    const fixedTop = document.getElementById("fixed-menu").offsetTop;
    window.onscroll = () => {
      let scrollTop = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );
      if (scrollTop >= fixedTop) {
        this.setState({ needFixed: true });
      } else if (scrollTop < fixedTop) {
        this.setState({ needFixed: false });
      }
    };
  }

  render() {
    return (
      <div id="fixed-menu" className={`${this.state.needFixed ? "fixed" : ""}`}>
        <div className="headerUl">
          {menuitems.map((level, index) => (
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
              {level.submenu}
            </MenuLevel>
          ))}
        </div>
      </div>
    );
  }
}

function Header() {
  return (
    <div>
      <Menu />
      <header>
        <div className="pageHeader" align="center">
          <img
            src="https://www.avas-angels.com/images/HiResLogo.png"
            alt="Ava's Angel"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
