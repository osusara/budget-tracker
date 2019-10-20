import React, { Component } from "react";
import firebaseApp from "../../firebase";

class Header extends Component {

  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout = () => {
    firebaseApp.auth().signOut()
  }

  render() {
    return (
      <div style={header}>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <h1 className="header-text" style={headerText}>Budget Tracker</h1>
          </div>
          <div className="col-md-8 col-sm-6 col-xs-6 my-auto">
            <h4 className="text-right my-auto username-text">
              Hi! {this.props.userData}{" "}
              <button
                onClick={this.logout}
                className="btn btn-secondary logout-btn"
                style={button}
              >
                Logout
              </button>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

const header = {
  backgroundImage: "linear-gradient(to right, #323232 0%, #111 100%)",
  color: "#FFF",
  padding: "10px",
};

const headerText = {
  margin: "0 10px 0 10px"
};

const button = {
  backgroundImage: "linear-gradient(to right, #545454 0%, #333 100%)",
  border: "none",
  borderRadius: "100px"
};

export default Header;
