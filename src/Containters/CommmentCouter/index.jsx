import React, { Component } from "react";
import axios from "axios";
const API = "https://authorwrites-blog-api.herokuapp.com/";
/*import { render } from "@testing-library/react";*/
class CommentCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CommentCounter: NaN,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        this.setState({
          CommentCounter: res.data.notes[this.props.cardindex].Comments.length,
          isLoading: false,
        });
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }
  render() {
    return (
      <React.Fragment>
        <a className="btn btn-danger mx-4 my-0.5">
          {this.state.CommentCounter} Comments
        </a>
      </React.Fragment>
    );
  }
}

export default CommentCounter;
