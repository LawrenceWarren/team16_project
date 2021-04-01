//This code was written by Yutian Chen.

import React from "react";
import { Menu as Nav } from "antd";

// This is the detail of menu items
// ***** Can add to the menu by directly add to this list *****
// ***** IconType can fill with any (of no use) *****
const menus = [
  { url: "/LookupUser", name: "Users" },
  { url: "/CheckContact", name: "Contact Info" },
  { url: "/CheckFood", name: "Food Info" },
  { url: "/CheckCharities", name: "Charity Info" },
  { url: "/CheckFeedback", name: "Feedback Info" },
  { url: "/CheckHotels", name: "Hotel Info" },
];

// This is the setting of the menu on the top left
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "/Admin",
      collapsed: true,
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    // Bind a menu item with a url and set an onClick event for each
    return (
      <Nav
        selectedKeys={[this.state.url]}
        mode="inline"
        theme="dark"
        onClick={({ key }) => {
          this.props.history.push(`/Admin${key}`);
          this.setState({
            url: key,
          });
        }}
      >
        {menus.map((item, _index) => (
          <Nav.Item key={item.url}>
            <span className="buttonSpan">{item.name}</span>
          </Nav.Item>
        ))}
      </Nav>
    );
  }
}

export default Menu;
