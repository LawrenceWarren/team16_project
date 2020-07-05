//This code was written by Yutian Chen.

import React from "react";
import { Menu } from "antd";

// This is the detail of menu items
// ***** Can add to the menu by directly add to this list *****
// ***** IconType can fill with any (of no use) *****
const menus = [
  { url: "/", name: "Home" },
  { url: "/LookupUser", name: "Users" },
  { url: "/CheckContact", name: "Contact Info" },
  { url: "/CheckFood", name: "Food Info" },
];

// This is the setting of the menu on the top left
class AdminMenu extends React.Component {
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
      <Menu
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
          <Menu.Item key={item.url}>
            <span className="buttonSpan">{item.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default AdminMenu;
