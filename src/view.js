import React, { Component } from "react";
import Welcome from "../src/Components/Welcome/index";
import CardCounter from "../src/Containters/CardCounter/index";
import "./viewstyle.css";
class View extends Component {
  state = {};

  render() {
    if (this.props.token !== "")
      return (
        <React.Fragment>
          <Welcome token={this.props.token} />
          <CardCounter token={this.props.token} />)
        </React.Fragment>
      );
    else {
      return <canvas style={{ height: "1px" }}></canvas>;
    }
  }
}

export default View;
