import React from "react";
import { Menu } from 'antd';
import { RightOutlined } from '@ant-design/icons';

// This is the detail of menu items
// ***** Can add to the menu by directly add to this list *****
// ***** IconType can fill with any (of no use) *****
const menus = [
    {url: '/', name: 'Home', iconType: 'HomeOutlined'},
    {url: '/LookupUser', name: 'Users', iconType: 'UserOutlined'},
    {url: '/CheckContact', name: 'Contact Info', iconType: 'ContactsOutlined'},
];

// This is the setting of the menu on the top left
class AdminMenu extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            url: '/Admin'
        }
    }

    render() {
        // Bind a menu item with an url and set an onClick event for each
        return(
            <div>
                <Menu selectedKeys={[this.state.url]} mode="inline" theme="dark"
                    onClick={({key}) => {
                        this.props.history.push(`/Admin${key}`)
                        this.setState({
                            url: key
                        })
                    }}
                >
                {
                    menus.map( (item, _index) =>
                        <Menu.Item key={item.url}>
                            <RightOutlined className={item.iconType} />
                            <span>{item.name}</span>
                        </Menu.Item>
                    )
                }
                </Menu>
            </div>
        )
    }
}

export default AdminMenu;