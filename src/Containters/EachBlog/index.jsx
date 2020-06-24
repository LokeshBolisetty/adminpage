import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import CommentCounter from "../CommmentCouter/index";
import EditModal from "../Editor";

const API = "https://authorwrites-blog-api.herokuapp.com/";

class EachBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        //   console.log(res);
        //   console.log(res.data.notes[this.props.index]);
        this.setState({
          blogs: res.data.notes[this.props.index],
          isLoading: false,
        });
        //  console.log(res);
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }
  handledelete = () => {
    console.log(this.state.blogs._id);
    axios
      .delete(API + this.state.blogs._id, {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
      .then((res) => {
        console.log(res);
      alert("Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      alert("Sorry was not able to delete. Try logging out and logging in");
      });
    
    /*document.getElementById("Title").innerHTML = `Deleted succesfully`;
    /*alert(Title.value);
    alert("Blog deted succesfully. Refresh the page to see changes.");*/
  };
  render() {
    return (
      <React.Fragment>
        <div className="card">
          {/*<img
            className="card-img-top"
            src={this.state.blogs.Image}
            alt="Blog pic"
            loading="lazy"
          />*/}
          <div className="card-body my-2">
            <h1 id="Title">{this.state.blogs.Title}</h1>
            <p>Created on {this.state.blogs.Created}</p>
            <p>Last modified on {this.state.blogs.Updated}</p>
            <a className="btn btn-primary mx-4 my-2">
              {this.state.blogs.Likes} Likes
            </a>
            <CommentCounter cardindex={this.props.index} />
            <a
              className="btn btn-primary mx-4 my-2"
              onClick={this.handledelete}
            >
              Delete
            </a>
            {/*<button
              type="button"
              className="btn btn-secondary"
              onClick={<EditModal data={this.state.blogs} />}
            >
              Edit
            </button>*/}
            <EditModal data={this.state.blogs} token={this.props.token} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EachBlog;
