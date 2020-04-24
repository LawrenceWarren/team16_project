import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone number",
    dataIndex: "phoneNum",
    key: "phoneNum",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Time",
    dataIndex: "currentTime",
    key: "currentTime",
  },
];

class AdminCheckContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Infos: [
        {
          currentTime: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNum: "",
          message: "",
        },
      ],
    };
  }

  componentDidMount = () => {
    this.getContactInfo();
  };

  getContactInfo = () => {
    fetch("/contactReq") //Fetch from the server
      .then((res) => res.json()) //JSONify the data
      .then((res) => this.setState({ Infos: res })) //Pass the JSON into state
      .catch((err) => err);
  };

  // Switch the date information to readable form
  switchDate(milliseconds) {
    var date = new Date(milliseconds);
    return date.toUTCString();
  }

  render() {
    // Switch the date information to readable form
    const newInfo = this.state.Infos;
    for (var i = 0; i < newInfo.length; i++) {
      newInfo[i].currentTime = this.switchDate(Number(newInfo[i].currentTime));
    }

    return (
      <div>
        <h1>Eateries information</h1>
        <div>
          <Table
            dataSource={this.state.Infos}
            columns={columns}
            rowKey="currentTime"
          />
        </div>
      </div>
    );
  }
}

export default AdminCheckContact;
