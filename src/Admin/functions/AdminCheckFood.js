//This code was written by Lawrence Warren

import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Eatery name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Eatery address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Eatery type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Eatery price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Eatery Link",
    dataIndex: "link",
    key: "link",
  },
  {
    title: "Link to image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Registered date",
    dataIndex: "registerDate",
    key: "registerDate",
  },
];

class AdminCheckFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Infos: [
        {
          image: "",
          name: "",
          address: "",
          type: "",
          price: "",
          link: "",
          registerDate: "",
        },
      ],
    };
  }

  //Calls the server after the DOM is rendered
  async componentDidMount() {
    console.log("FoodAdmin: Fetching from server...");
    try {
      const res = await fetch("/foodReq");
      if (res.status >= 400) {
        throw new Error("There was an error in the HTTP request.");
      }

      const food = await res.json();
      this.setState({ Infos: food });
      console.log("Food: Data from the server has been received!");
    } catch (err) {
      console.error("Food: " + err);
    }
  }

  // Switch the date information to readable form
  switchDate(milliseconds) {
    var date = new Date(milliseconds);
    return date.toUTCString();
  }

  render() {
    // Switch the date information to readable form
    return (
      <div>
        <h1>Contact Information</h1>
        <div>
          <Table
            dataSource={this.state.Infos}
            columns={columns}
            rowKey="registerDate"
          />
        </div>
      </div>
    );
  }
}

export default AdminCheckFood;
