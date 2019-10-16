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
          <div className="col-md-11 col-sm-8 col-xs-6">
            <h1 style={headerText}>Budget Tracker</h1>
          </div>
          <div className="col-md-1 col-sm-4 col-xs-6 py-2">
            <button
              onClick={this.logout}
              className="btn btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const header = {
  background: "#333",
  color: "#FFF",
  padding: "10px"
};

const headerText = {
  margin: "0 0 0 10px"
};

export default Header;
