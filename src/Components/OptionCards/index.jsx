import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

class OptionCards extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <div className="card-column">
            <div className="card my-2">
              <img
                className="card-img-top"
                src="https://www.lifewire.com/thmb/LoeFrbx1TR_NFkaoIG3m4suX98c=/1500x966/filters:fill(auto,1)/GettyImages-905508166-5c8a523fc9e77c00010c231d.jpg"
                alt="Add a blog"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Add a blog</h5>
                <p className="card-text">
                  Viewers are waiting for your new post. Don't disappoint them
                  !!
                </p>
                <a
                  href="../Containers/Statview/index.html"
                  className="btn btn-primary"
                >
                  Add
                </a>
              </div>
            </div>
            <div className="card my-2">
              <img
                className="card-img-top"
                src="https://www.ancient-origins.net/sites/default/files/field/image/eye-of-Providence.jpg"
                alt="view"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">View your blogs</h5>
                <p className="card-text">Want to view or edit your blogs ?</p>
                <a href="#1" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
            <div className="card my-2">
              <img
                className="card-img-top"
                src="https://www.srmist.edu.in/sites/centre-for-statistics/files/images/Centre-for-Statistics.jpg"
                alt="Stats"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Stats</h5>
                <p className="card-text">
                  Check how people like your posts. See how many people like
                  your post and what they have got to say about your posts
                </p>
                <a href="#1" className="btn btn-primary">
                  Stats
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OptionCards;
