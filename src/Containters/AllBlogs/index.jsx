import React, { Component } from "react";
/*import axios from "axios";*/
import "./style.css";
import EachBlog from "../EachBlog";
/*import { render } from "@testing-library/react";*/
class AllBlogs extends Component {
  render() {
    var returner = [];

    for (let i = 0; i < this.props.cards; i++) {
      returner.push(<EachBlog index={i} key={i} token={this.props.token} />);
    }
    return <div>{returner}</div>;
  }
}

export default AllBlogs;
