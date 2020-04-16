import React from "react";
import loading from "./resource/intermediatePage/loading.gif";

class Intermediate extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 3,
    };
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState(
        (preState) => ({
          seconds: preState.seconds - 1,
        }),
        () => {
          if (this.state.seconds === 0) {
            clearInterval(timer);
          }
        }
      );
    }, 1000);
  }

  render() {
    if (this.state.seconds === 0) {
      window.location.href = "/";
    }

    let loadingWrap = {
      width: "50%",
      height: "50%",
      marginLeft: "25%",
      marginRight: "25%",
    };

    return (
      <div>
        <img src={loading} style={loadingWrap} alt="loading" />
      </div>
    );
  }
}

export default Intermediate;
