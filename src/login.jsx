import React, { Component } from "react";
import "./loginstyler.css";
import axios from "axios";
import Welcome from "./Components/Welcome";
import CardCounter from "./Containters/CardCounter";
const API = "https://authorwrites-blog-api.herokuapp.com/login";
let token = "";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
  }

  loginhandler = () => {
    let enteredusername =
      document.activeElement.parentElement.childNodes[1].value;
    let enteredpassword =
      document.activeElement.parentElement.childNodes[3].value;
    axios
      .post(API, {
        email: enteredusername,
        password: enteredpassword,
      })
      .then((res) => {
        if (res.data.token) {
          token = res.data.token;
          this.setState({ token: res.data.token });
        } else {
          alert("Wrong mail or password has been entered");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong email or password");
      });
    this.setState({ token: token });
  };
  render() {
    if (this.state.token === "") {
      return (
        <React.Fragment>
          <div className="Welcome2">
            <h1>Author writes welcomes you</h1>
            <form>
              <div className="container">
                <label htmlFor="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />

                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <button type="button" onClick={this.loginhandler}>
                  Login
                </button>
              </div>
              <div className="container">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
              </div>
            </form>
            {/*<View token={this.state.token} />*/}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Welcome token={this.state.token} />
          <CardCounter token={this.state.token} />)
        </React.Fragment>
      );
    }
  }
}

export default Login;
