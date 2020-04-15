import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import firebaseApp from "../../firebase";

class Header extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Navbar.Brand>Budget Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text className="mr-sm-2">
            Hi! {this.props.userData}
          </Navbar.Text>
          <Nav>
            <Nav.Link
              onClick={this.logout}
              className="btn btn-secondary text-light logout-btn"
            >
              {" "}Logout{" "}
              <i className="fas fa-sign-out-alt"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
