import React, { Component } from "react";
import axios from "axios";
import "./style.css";

const API = "https://authorwrites-blog-api.herokuapp.com/";

class BlogAddition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        //        console.log(res);
        this.setState({
          count: res.data.count,
          isLoading: false,
        });
        //console.log(res);
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }
  handleaddition = () => {
    let Title = document.getElementById("Header");
    let Content = document.getElementById("Content");
    let Image = document.getElementById("Image");
    axios
      .post(
        API,
        {
          Title: document.getElementById("Header").value,
          Body: Content.value,
          Image: Image.value,
        },
        { headers: { Authorization: "Bearer " + this.props.token } }
      )
      .then((res) => {
        console.log(res);
        alert("Blog posted successfully. Refresh to see the changes.");
      })
      .catch((err) => {
        console.log(err);
        alert("Blog has not been posted. Try logging out and logging in again");
      });
    //alert(Title.value);
    //alert(Content.value);

    Title.value = "";
    Content.value = "";
    Image.value = "";
  };
  render() {
    return (
      <React.Fragment>
        <h3>Add a blog</h3>
        <form>
          <div className="form-group">
            <label htmlFor="Header">Title</label>
            <input
              type="text"
              className="form-control"
              id="Header"
              placeholder="Enter the Title of the blog"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Content">Content</label>
            <input
              type="text"
              className="form-control"
              id="Content"
              placeholder="Enter the content of the blog"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              className="form-control"
              id="Image"
              placeholder="Enter the url of an image you want to feature"
            />
          </div>
        </form>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.handleaddition}
          id="addtxt"
        >
          Add <span className="badge badge-light">{this.state.count}</span>
        </button>
      </React.Fragment>
    );
  }
}

export default BlogAddition;
